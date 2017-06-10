import {Component, OnInit, ContentChild, Input} from '@angular/core';
import {PopupComponent, PopupOrientation} from "../../../components/popup/popup.component";

@Component({
  templateUrl: './popup-demo.component.html',
  styleUrls: ['./popup-demo.component.scss']
})
export class PopupDemoComponent implements OnInit {
  down = PopupOrientation.Bottom;
  up = PopupOrientation.Top;
  right = PopupOrientation.Right;
  constructor() {
  }
  public showPopup: boolean;
  public showNested1: boolean;
  public showNested2: boolean;
  @ContentChild(PopupComponent) popup: PopupComponent;

  ngOnInit() {
  }

  onClick() {
    this.showPopup = !this.showPopup;
  }
  onClickNested() {
    this.showNested1 = !this.showNested1;
  }
}
