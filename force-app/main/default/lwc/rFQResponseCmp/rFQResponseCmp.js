import { LightningElement, track } from 'lwc';
// import getFieldSetFields from '@salesforce/apex/RFQResponseClass.getFieldSetFields';
import saveRFQResponse from '@salesforce/apex/RFQResponseClass.saveRFQResponse';
import getVendorItems from '@salesforce/apex/RFQResponseClass.getVendorItems';

export default class RFQResponseCmp extends LightningElement {
    @track data = [];
    @track columns = [
        { label: 'LINE ITEM', fieldName: 'label', type: 'text' },
        { label: 'Description', fieldName: 'description', type: 'text', editable: true },
        { label: 'QUANTITY', fieldName: 'quantity', type: 'number', editable: true },
        { label: 'UNIT PRICE (USD)', fieldName: 'unitPrice', type: 'number', editable: true },
        { label: 'ESTIMATED WORK (DAYS)', fieldName: 'estimatedWork', type: 'number', editable: true },
        { label: 'VENDOR NOTE', fieldName: 'vendorNote', type: 'text', editable: true },
        {
            label: 'ACTION',
            type: 'button',
            typeAttributes: {
                label: 'Delete',
                name: 'delete',
                variant: 'base',
            },
        },
    ];

    connectedCallback() {
        // Fetch the first two records from the RFQ_Vendor_Item__c object
        getVendorItems()
            .then(result => {
                this.data = result;
            })
            .catch(error => {
                console.error('Error fetching vendor items:', error);
            });
    }

    handleRowAction(event) {
        const actionName = event.detail.action.name;
        const row = event.detail.row;
        if (actionName === 'delete') {
            this.data = this.data.filter(item => item.id !== row.id);
        }
    }

    handleAddRow() {
        const newRow = {
            id: String(this.data.length + 1),
            label: `Item ${this.data.length + 1}`,
            description: '',
            quantity: '',
            unitPrice: '',
            estimatedWork: '',
            vendorNote: '',
        };
        this.data = [...this.data, newRow];
    }

    handleSave() {
        console.log('save');
        
        saveRFQResponse({ rfqData: this.data })
            .then(() => {
                console.log('Data saved successfully');
            })
            .catch(error => {
                console.error('Error saving data:', error);
            });
    }
}