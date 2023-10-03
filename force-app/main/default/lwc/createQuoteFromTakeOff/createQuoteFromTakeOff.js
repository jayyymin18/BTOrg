import { LightningElement, track } from 'lwc';
import fetchTakeoff from '@salesforce/apex/importTakeoff.fetchTakeoff';

export default class CreateQuoteFromTakeOff extends LightningElement {
    @track columns = [
        {
            label: 'TOL #',
            fieldName: 'Name',
            type: 'text',
            sortable: true
        },
        {
            label: 'Quantity',
            fieldName: 'buildertek__Quantity__c',
            type: 'number',
            sortable: true
        },
        {
            label: 'Status',
            fieldName: 'buildertek__Status__c',
            type: 'picklist',
            sortable: true
        },
        {
            label: 'Build Phase',
            fieldName: 'buildertek__Build_Phase__c',
            type: 'text',
            sortable: true
        },
        {
            label: 'Cost Code',
            fieldName: 'buildertek__Cost_Code__c',
            type: 'text',
            sortable: true
        }
    ];
    @track error;
    @track takeoffList = [];

    connectedCallback() {
        this.fetchData();
    }

    fetchData() {
        fetchTakeoff()
            .then(result => {
                this.takeoffList = result;
                console.log('TakeOffList: ', this.takeoffList);
            })
            .catch(error => {
                this.error = error;
                console.log('Error:', error);
            });
    }
}