import {Component, OnInit, ContentChild, Input} from '@angular/core';
import {PopupComponent, PopupOrientation} from "../../../components/popup/popup.component";

@Component({
  templateUrl: './popup-demo.component.html',
  styleUrls: ['./popup-demo.component.scss']
})
export class PopupDemoComponent implements OnInit {
  orientation = PopupOrientation.Bottom;
  constructor() {
  }
  public showPopup: boolean;
  @ContentChild(PopupComponent) popup: PopupComponent;

  ngOnInit() {
  }

  onClick() {
    this.showPopup = !this.showPopup;
  }
}
