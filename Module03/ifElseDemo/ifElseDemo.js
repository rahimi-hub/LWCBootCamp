import { LightningElement } from 'lwc';

export default class IfElseDemo extends LightningElement {
    isJerry = true;
    isTom = false;
 
    showJerry() {
        //Toggle display details attribute
        this.isTom = !this.isTom;
        this.isJerry = !this.isJerry;
    }
    showTom() {
        //Toggle display details attribute
        this.isJerry = !this.isJerry;
        this.isTom = !this.isTom;
    }


}