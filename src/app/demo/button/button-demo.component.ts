import {Component, OnInit, Input, ContentChildren, QueryList, ContentChild} from '@angular/core';
import {Button} from "../../../components/button/button.component";
import {Popup} from "../../../components/popup/popup.component";

@Component({
    templateUrl: './button-demo.component.html',
    styleUrls: ['./button-demo.component.scss']
})
export class ButtonDemo implements OnInit {

    constructor() {

    }

    ngOnInit() { }


}
