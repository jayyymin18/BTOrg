import { api, LightningElement, track, wire } from 'lwc';
import getCategoryRecords from '@salesforce/apex/walkThroughController.getCategoryRecords';
import getFieldDetails from '@salesforce/apex/walkThroughController.getFieldDetails';
import fetchWalkthroughLineData from '@salesforce/apex/walkThroughController.fetchWalkthroughLineData';
import getFieldSet from '@salesforce/apex/walkThroughController.getFieldSetValues';
import updateRecord from '@salesforce/apex/walkThroughController.updateRecord';
import { NavigationMixin } from "lightning/navigation";
import { subscribe, unsubscribe, onError } from 'lightning/empApi';

const actions = [
    { label: 'Edit', name: 'edit' },
    { label: 'N/A', name: 'na' },
];

export default class NewWalkThroughLineContainerCmp extends NavigationMixin(LightningElement) {
    @track categories;
    @track selectedCategory = '';
    @track selectedCategoryLabel = 'None';
    @track fieldDetails = [];
    @api recordId;
    @track dataAvailable = false;
    @track isColumnsDataAvailable = false;

    @track data;
    @track columns;
    @track error;
    fldsItemValues = [];
    isInitalRender = true;
    isEditable = true;
    @track isUpdate = false;
    @track reloadVar = true;
    @track showNewModel = false;

    @track isLoading = false;

    @track isButtonVisible = false;
    @track originalData = [];
    changedFieldValues = {};

    subscription = {};
    CHANNEL_NAME = '/event/Refresh_Related_List__e';

    connectedCallback() {
        this.recordId = this.getParameterByName();
        console.log('record idd in connected callback==>',this.recordId);

        getCategoryRecords()
        .then((result) => {
            this.categories = result;
        })
        .catch((error) => {
            console.error(error);
        });

        subscribe(this.CHANNEL_NAME, -1, this.refreshList).then(response => {
            this.subscription = response;
        });
        onError(error => {
            console.error('Server Error--->'+error);
        });
    }
    
    handleCategorySelect(event) {
        const selectedCategory = event.currentTarget.value;
        const selectedCategoryLabel = event.currentTarget.label;
        this.selectedCategory = selectedCategory;
        this.selectedCategoryLabel = selectedCategoryLabel;
        if (this.selectedCategoryLabel === 'None') {
            this.dataAvailable = false;
            this.isColumnsDataAvailable = false;
            this.data = undefined;
            this.error = undefined;
        } else {
            console.log('in else');
            getFieldDetails({ objectName: 'buildertek__Walk_Through_List__c', recordId: this.recordId })
            .then((result) => {
                console.log('result-->',result);
                this.fieldDetails = result.filter(field => field.fieldName.includes(selectedCategoryLabel)).map(field => ({
                    fieldLabel: field.fieldLabel,
                    fieldType: field.fieldType,
                    fieldName: field.fieldName,
                    fieldValue: field.fieldValue,
                }));
                this.originalData = this.fieldDetails;
                this.dataAvailable = true;
                this.getRelatedRecords();
            })
            .catch((error) => {
                console.error(error);
            });
        }
    }

    getParameterByName(name) {
        var url = window.location.href;
        var regex = /buildertek__Walk_Through_List__c\/([^\/]+)/;
        var match = regex.exec(url);
        if (match && match.length > 1) {
            return match[1];
        }
        return null;    
    }

    renderedCallback() {
        if (this.isInitalRender) {
            const body = document.querySelector("body");

            const style = document.createElement('style');
            style.innerText = `
                .datatable_class .slds-cell-fixed{
                    background: #0678FF1A !important;
                }
            `;

            body.appendChild(style);
            this.isInitalRender = false;
        }
    }

    refreshList = ()=> {
        this.getRelatedRecords();
    }

    disconnectedCallback() {
        unsubscribe(this.subscription, () => {
            console.log('Unsubscribed Channel');
        });
    }

    getRelatedRecords() {
        fetchWalkthroughLineData({ wtRecordId: this.recordId, categoryId: this.selectedCategory })
            .then(result => {
                if (result.length > 0) {
                    this.data = result;
                    this.error = undefined;
                    this.isColumnsDataAvailable = true;
                } else {
                    this.data = undefined;
                    this.error = undefined;
                    this.isColumnsDataAvailable = false;
                }
            })
            .catch(error => {
                this.error = error;
                this.data = undefined;
            });
    }

    @wire(getFieldSet, { sObjectName: 'buildertek__Walk_Through_Line_Items__c', fieldSetName: 'buildertek__FieldsForDT' })
    wiredFields({ error, data }) {
        if (data) {
            data = JSON.parse(data);
            let cols = [];
            data.forEach(currentItem => {
                let col = { label: currentItem.label, fieldName: currentItem.name, type: currentItem.type};
                cols.push(col);
            });
            cols.push({type: 'action', typeAttributes: { rowActions: actions }})
            this.columns = cols;
        } else if (error) {
            console.log(error);
            this.error = error;
            this.columns = undefined;
        }
    }

    handleRowAction(event) {
        const actionName = event.detail.action.name;
        const row = event.detail.row;
        const recordId = row.Id;
        switch (actionName) {
            case 'edit':
                this.openEditModel(recordId);
                break;
            case 'na':
                console.log('na is pressed');
                break;
            default:
        }
    }

    openEditModel(recordId){
        this[NavigationMixin.Navigate]({
            type: 'standard__recordPage',
            attributes: {
                recordId: recordId,
                actionName: 'edit',
            },
        });
    }

    handlePlusButtonClick() {
        this.showNewModel = true;
    }

    handleClose(){
        this.showNewModel = false;
    }

    refreshTheDataTable(){
        this.getRelatedRecords();
    }

    inputValueIsChanged(event){
        console.log('input value is changed');
        this.isButtonVisible = true;
        const fieldName = event.target.dataset.fieldname;
        const changedValue = event.target.value;

        this.changedFieldValues[fieldName] = changedValue;
        console.log('fieldDetails-->',this.changedFieldValues);
    }

    saveChanges() {
        const changedFields = {};
        Object.keys(this.changedFieldValues).forEach(fieldName => {
            const originalValue = this.originalData.find(detail => detail.fieldName === fieldName).fieldValue;
            const changedValue = this.changedFieldValues[fieldName];
            if (originalValue !== changedValue) {
                changedFields[fieldName] = changedValue;
            }
        });
    
        console.log('changedFields-->', changedFields); // Log changedFields object
        updateRecord({ recordId: this.recordId, newFieldValues: changedFields })
            .then(result => {
                console.log('Record updated successfully-->', result);
            })
            .catch(error => {
                console.error('Error updating record:', error);
            });
    
        this.changedFieldValues = {};
        this.isButtonVisible = false;
    }
    

    revertChanges(){
        this.fieldDetails = JSON.parse(JSON.stringify(this.originalData));
        this.isButtonVisible = false;
    }
}