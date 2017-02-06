import {Component, OnInit, Input} from '@angular/core';
import {Button} from "../button/button.component";

@Component({
    selector: 'ave-popup',
    templateUrl: './popup.component.html',
    styleUrls: ['./popup.component.scss']
})
export class Popup implements OnInit {
  @Input() anchor: any;
  anchorBtn: Button;
    constructor() { }

    ngOnInit() { }
  setStyles() {
    this.anchorBtn = <Button>this.anchor;
      let styles = {
        'left': true ? this.anchorBtn.left + 'px' : '0px',
        'top': true ? this.anchorBtn.top + 'px' : '0px'
      };
      console.log(styles);
      return styles;
  }
}
