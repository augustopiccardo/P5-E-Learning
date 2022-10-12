import { api, LightningElement } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';

export default class UnitView extends NavigationMixin (LightningElement) {
    @api unit
    @api checkunit

    get Testunit() {
        return this.checkunit.includes(this.unit.Id);

    }

    ViewUnit(event) {
        
        this[NavigationMixin.Navigate]({
            type: 'standard__recordPage',
            attributes: {
                "recordId": event.target.dataset.prop,
                "objectApiName": "Unit__c",
                "actionName": "view"
            },
        });

    }

}