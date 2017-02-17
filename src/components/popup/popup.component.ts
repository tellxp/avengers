import {
  Component, OnInit, Input, HostListener, ElementRef, ViewContainerRef, ComponentRef,
  ViewRef, AfterViewInit, ViewChild
} from '@angular/core';
import {Button} from "../button/button.component";
import {PositionService} from "../common/position.service";


@Component({
  selector: 'ave-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss']
})
export class Popup implements OnInit, AfterViewInit {
  @Input() anchor: any;
  anchorBtn: Button;

  constructor(private position: PositionService) {
  }
  ngAfterViewInit() {
    console.log(this.position);
    // this.elementRef.nativeElement.offsetHeight = anchorRef.el.offsetHeight;
  }
  ngOnInit() {
  }

  setStyles() {
    this.anchorBtn = <Button> this.anchor;
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
