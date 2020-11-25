import { LightningElement,api } from 'lwc';

export default class ParentComp extends LightningElement {
    childOneStatus = false;
    childTwotatus = false;
    childThreeStatus = false;

    handleChild(event){
        switch(event.target.childName){
            case "ChildOneCOmp":
                event.target.isSelect = true ? this.childOneStatus = true : this.childOneSel = false;
                break;
            case "ChildTwoComp":
                event.target.isSelect = true ? this.childOneStatus = true : this.childOneSel = false;
                break;
            case "ChildThreeComp":
                event.target.isSelect = true ? this.childOneStatus = true : this.childOneSel = false;
                break;
        }
    }



}