import {Component, ContentChild, OnInit} from '@angular/core';
import {PopupComponent, PopupOrientation} from '../../../components/popup/popup.component';
import {rippleIn, rippleOut} from '../../../components/animation/ripple-animations';
import {transition, trigger, useAnimation} from '@angular/animations';

@Component({
  templateUrl: './popup-demo.component.html',
  styleUrls: ['./popup-demo.component.scss'],
  animations: [trigger('ripple', [
    transition('void => *',
      useAnimation(rippleIn,
        {
          params: {
            time: '4s',
            start: this.exp + 'px',
            end: 200 + 300 + 'px'
          }
        }
      )
    ),
    transition('* => void',
      useAnimation(rippleOut)
    )
  ])]
})
export class PopupDemoComponent implements OnInit {
  down = PopupOrientation.Bottom;
  up = PopupOrientation.Top;
  right = PopupOrientation.Right;
  exp = 100;

  constructor() {
    this.showPopup = false;
    this.exp = 0;
  }

  public showPopup: boolean;
  public showNested1: boolean;
  public showNested2: boolean;
  @ContentChild(PopupComponent) popup: PopupComponent;

  ngOnInit() {
  }

  onClick() {
    this.exp = 100;
    console.log(this.exp);
    this.showPopup = !this.showPopup;

    // console.log(this.exp);

  }

  onClickNested() {
    this.showNested1 = !this.showNested1;

    this.exp = 200;
    // console.log(this.exp);
  }
}
