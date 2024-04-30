import { LightningElement, api, track } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import getFields from '@salesforce/apex/New_WTLine_Controller.getFieldSet';
import getRecordType from '@salesforce/apex/New_WTLine_Controller.getRecordType';
import saveData from '@salesforce/apex/New_WTLine_Controller.saveData';


export default class NewWalkThroughLineCmp extends LightningElement {

    @api walkThroughId;
    @api categoryId;
    
    @track recordTypeName;
    @track selectedRecordType;
    @track step1 = true;
    @track step2 = false;

    @track recordTypeOptions = {};
    @track fieldsForSelectedRecordType = [];

    @track isProduct = false;

    objectApiName = 'buildertek__Walk_Through_Line_Items__c';

    connectedCallback() {
        this.getRecordTypeValues();
        this.getFieldsetFields();

        console.log(this.categoryId);
        console.log(this.walkThroughId);

    }

    getRecordTypeValues(){
        getRecordType({ ObjectAPIName: this.objectApiName})
        .then(result =>{
            this.recordTypeOptions =result.map((item) => Object.assign({}, item, { label: item.Name, value: item.Id }));
            this.selectedRecordType = this.recordTypeOptions[0].value;

        })
        .catch(error => {
            console.error('Error:', error);
        })
    }

    getFieldsetFields(){
        getFields({ objName:this.objectApiName, fieldSetName:'buildertek__NewfromParent'})
        .then(result => {
            this.fieldsForSelectedRecordType = JSON.parse(result);
        })
        .catch(error => {
            console.error('Error:', error);
        });
    }


    handleRecordTypeChange(event){
        try {
            console.log('Handle Record Type Selection')
            this.selectedRecordType = event.detail.value;
            var recordTypeLabel = this.recordTypeOptions.find(item => item.value === this.selectedRecordType).label;
            this.recordTypeName = recordTypeLabel;
            console.log(this.recordTypeName);
        } catch (error) {
            console.error('Error:', error);
        }
    }

    handleClose(){
        this.dispatchEvent(new CustomEvent("close"));
    }

    handleSave(event){
        try{
            if (this.selectedRecordTypeName === 'Product') {
                if (!this.allData.buildertek__Product__c) {
                    this.showToast('Error', 'Please select a Product', 'error');
                    return;
                }
            } else if (this.selectedRecordTypeName === 'No Product') {
                if (!this.allData.buildertek__Description__c) {
                    this.showToast('Error', 'Please enter a Description', 'error');
                    return;
                }
            }

            event.preventDefault(); // Prevent default form submission
            const fields = {}; // Object to hold field values
            this.fieldsForSelectedRecordType.forEach(field => {
                fields[field.name] = this.template.querySelector(`[data-field="${field.name}"]`).value;
            });

            // add a record type field and its value
            fields['RecordTypeId'] = this.selectedRecordType;
            fields['buildertek__Walk_Through_List__c'] = this.walkThroughId;
            fields['buildertek__BT_Category__c'] = this.categoryId;
            console.log('Fields:', fields);

            saveData({ allData: fields})
            .then(result =>{
                console.log('result', result);
                this.dispatchEvent(new CustomEvent("close"));
                this.showToast('Success', 'Record Created Successfully', 'success');
            }).catch(error => {
                console.error('Error:', error);
            })

        }catch(error){
            console.error('error', error);
            this.showToast('Error', 'Something Went Wrong', 'error');
        }   
    }

    handleSaveAndNext(){
        try{

        }catch(error){
            console.error('error', error);
        }   
    }

    handleNext(){
        try{
            this.step2 = true;
            this.step1 = false;

            var fieldsForSelectedRecord = this.fieldsForSelectedRecordType;
            fieldsForSelectedRecord.forEach(field => {
                if(field.name === 'buildertek__Product__c' && this.recordTypeName =='Product'){
                    this.isProduct = true;
                }else if(field.name === 'buildertek__Product__c' && this.recordTypeName !='Product'){
                    fieldsForSelectedRecord.splice(fieldsForSelectedRecord.indexOf(field), 1);
                }
            });
            this.fieldsForSelectedRecordType = fieldsForSelectedRecord;

        }catch(error){
            console.error('error', error);
        }
    }

    showToast(title, message, variant) {
        const event = new ShowToastEvent({
            title: title,
            message: message,
            variant: variant,
        });
        this.dispatchEvent(event);
    }

}