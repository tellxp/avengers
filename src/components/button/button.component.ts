import {Component, OnInit, ElementRef, AfterViewInit, AfterContentInit, HostListener} from '@angular/core';

@Component({
  selector: 'ave-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  host: {'tabindex':'0'}
})
export class Button implements OnInit, AfterViewInit, AfterContentInit {
  top: number;
  left: number;
  height: number;
  width: number;

  constructor(private el: ElementRef) {

  }

  ngAfterViewInit() {
    this.top = this.el.nativeElement.offsetTop;
    this.left = this.el.nativeElement.offsetLeft;
    this.height = this.el.nativeElement.offsetHeight;
    this.width = this.el.nativeElement.offsetWidth;
  }

  ngAfterContentInit() {
  }

  ngOnInit() {
  }
}
