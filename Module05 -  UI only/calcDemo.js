import { LightningElement } from 'lwc';

export default class CalcDemo extends LightningElement {

    calcExpression='';
    calcResult='';

    handleClick(evt) {
        this.calcExpression = this.calcExpression + evt.target.label;
        if (evt.target.label === "CLR"){
            this.calcResult = '';
            this.calcExpression = '';
        }
        if (evt.target.label === "+"){
            this.calcExpression = this.calcExpression + "+" ;
        }
        if (evt.target.label === "-"){
            this.calcResult = '';
            this.calcExpression = '';
        }
        if (evt.target.label === "*"){
            this.calcResult = '';
            this.calcExpression = '';
        }
        if (evt.target.label === "/"){
            this.calcResult = '';
            this.calcExpression = '';
        }
    }
}