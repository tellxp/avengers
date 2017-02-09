import {Component, OnInit, Input, HostListener, ElementRef} from '@angular/core';
import {Button} from "../button/button.component";
import {DOCUMENT} from '@angular/platform-browser';

@Component({
  selector: 'ave-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss']
})
export class Popup implements OnInit {
  @Input() anchor: any;
  anchorBtn: Button;
  elementRef: ElementRef;

  constructor(private el: ElementRef) {
    this.elementRef = el;
  }

  ngOnInit() {
  }

  setStyles() {
    this.anchorBtn = <Button>this.anchor;
    let styles = {
      'left': true ? this.anchorBtn.left + 'px' : '0px',
      'top': true ? this.anchorBtn.top + 'px' : '0px'
    };
    return styles;
  }

  // @HostListener("window:scroll", [])
  // onWindowScroll() {
  //   this.anchorBtn = <Button>this.anchor;
  //   let styles = {
  //     'left': true ? this.anchorBtn.left + 'px' : '0px',
  //     'top': true ? this.anchorBtn.top + 'px' : '0px'
  //   };
  // }
}
