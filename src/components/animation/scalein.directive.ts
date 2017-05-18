import {AfterViewChecked, Directive, ElementRef, HostListener, Input, OnChanges, Renderer2, SimpleChanges} from '@angular/core';

@Directive(
  {
    selector: '[aveScalein]'
  }
)
export class ScaleinDirective implements OnChanges {
  @Input() host: any;

  @HostListener('animationstart') OnAnimationStart() {

  }
  @HostListener('animationend') OnAnimationEnd() {


  }
  ngOnChanges(changes: SimpleChanges) {
  }
  constructor(private elementRef: ElementRef, private render: Renderer2) {
  }
}
