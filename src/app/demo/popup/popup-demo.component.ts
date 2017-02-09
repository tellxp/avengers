import {Component, OnInit, ContentChild, Input} from '@angular/core';
import {Popup} from "../../../components/popup/popup.component";

@Component({
  templateUrl: './popup-demo.component.html',
  styleUrls: ['./popup-demo.component.scss']
})
export class PopupDemo implements OnInit {
  constructor() {
  }
  @Input() showPopup: boolean;

  @ContentChild(Popup) popup: Popup;

  ngOnInit() {
    this.showPopup = false;
  }

  onButtonClick(event) {
    this.showPopup = !this.showPopup;
  }
}
