import { LightningElement,api } from 'lwc';

export default class ChildOneComp extends LightningElement {
    @api isSelect=false;

    handleClick(event){
        const event1 = new CustomEvent('childclick',
        {
            bubbles: true,
            composed: true,
            detail: this.btnSelection
        });
        this.dispatchEvent(event1);
        
        this.isSelect=!this.isSelect;
    }

}