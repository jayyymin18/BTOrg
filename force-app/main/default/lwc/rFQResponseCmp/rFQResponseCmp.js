import { LightningElement, track, api } from 'lwc';
import getallData from '@salesforce/apex/RFQResponseClass.getallData';


export default class RFQResponseCmp extends LightningElement {
    @track data ;
    @track columns = [];
    @api rfqVendorId='';

    connectedCallback() {
        console.log('RFQ Vendor Id:', this.rfqVendorId);
        this.getData();
    }

    getData(){
        console.log('This is just a log');
        getallData(
            {
                rfqVendorId : this.rfqVendorId
            }
        )
        .then(result => {
            console.log('result==>',result);
            this.data = result;
            console.log('this data==>',this.data);
        })
    }

    buildColumns(fieldMetadata) {
        let columns = fieldMetadata.map(field => {
            console.log('Field Metadata:', field);
            let column = {
                label: field.label,
                fieldName: field.apiName,
                type: field.type
            };
            if (field.type === 'string') {
                column.editable = true;
            } else if (field.type === 'currency' || field.type === 'number') {
                column.editable = true;
                column.type = 'number';
            }
            return column;
        });
    
        columns.push({
            label: 'ACTION',
            type: 'button',
            typeAttributes: {
                label: 'Delete',
                name: 'delete',
                variant: 'base',
            },
        });
    
        return columns;
    }
    
    handleAddRow() {
        const newRow = {
            id: String(this.data.length + 1),
            // Initialize other fields as required
        };
        this.data = [...this.data, newRow];
    }

    handleSave() {
        if (this.data.length === 0) {
            console.warn('No data to save.');
            return;
        }
    
        saveRFQResponse({ rfqData: this.data })
            .then(() => {
                console.log('Data saved successfully');
                // Optionally refresh data or show a success message
            })
            .catch(error => {
                console.error('Error saving data:', error);
                // Optionally show an error message
            });
    }
    

}