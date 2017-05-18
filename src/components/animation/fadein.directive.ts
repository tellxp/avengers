import {AfterViewChecked, Directive, ElementRef, HostListener, Input, OnChanges, SimpleChanges} from '@angular/core';

@Directive(
  {
    selector: '[aveFadein]'
  }
)
export class FadeinDirective implements OnChanges {
  @Input() trigger: HTMLElement;

  ngOnChanges(changes: SimpleChanges) {
  }
  constructor() {
  }
}
