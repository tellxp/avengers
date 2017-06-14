import {Component, ContentChild, OnInit} from '@angular/core';
import {PopupComponent, PopupOrientation} from '../../../components/popup/popup.component';
import {fadeAnimations} from '../../../components/animation/fade-animations';
import {expandAnimations} from '../../../components/animation/expand-animations';

@Component({
  templateUrl: './popup-demo.component.html',
  styleUrls: ['./popup-demo.component.scss'],
  animations: [expandAnimations]
})
export class PopupDemoComponent implements OnInit {
  down = PopupOrientation.Bottom;
  up = PopupOrientation.Top;
  right = PopupOrientation.Right;
  exp: string;

  constructor() {
    this.showPopup = false;
    this.exp = 'out';
  }

  public showPopup: boolean;
  public showNested1: boolean;
  public showNested2: boolean;
  @ContentChild(PopupComponent) popup: PopupComponent;

  ngOnInit() {
  }

  onClick() {
    this.showPopup = !this.showPopup;
    this.exp = 'out';
    // console.log(this.exp);

  }

  onClickNested() {
    this.showNested1 = !this.showNested1;

    this.exp = 'in';
    // console.log(this.exp);
  }
}
