import {Directive, ElementRef, HostListener, Input, OnChanges, Renderer2, SimpleChanges} from '@angular/core';
import {WidgetStyle} from '../core/widget.component';

@Directive(
  {
    selector: '[aveSpread]',
  }
)
export class SpreadDirective implements OnChanges {
  @Input() stateTrigger: string;
  @Input() hostStyle: WidgetStyle;

  @HostListener('animationstart') onAnimationStart() {
  }
  spreadInStyles = new Map<string, string>();
  spreadOutStyles = new Map<string, string>();

  constructor(private elementRef: ElementRef, private render: Renderer2) {

  }
  composeSpreadInStyles() {
    this.spreadInStyles.set('height', `${this.hostStyle.height}px`);

    this.spreadInStyles.set('transition-property', 'height');
    this.spreadInStyles.set('transition-duration', '0.5s');
    this.spreadInStyles.set('transition-timing-function', 'cubic-bezier(0,0,0.2,1)');
    this.spreadInStyles.set('transition-delay', '0s');
  }
  composeSpreadOutStyles() {
    this.spreadInStyles.set('transition-property', 'height');
    this.spreadInStyles.set('transition-duration', '10s');
    this.spreadInStyles.set('transition-timing-function', 'cubic-bezier(0,0,0.2,1)');
    this.spreadInStyles.set('transition-delay', '0s');
    this.spreadInStyles.set('height', '0');
  }
  spreadIn() {
    this.composeSpreadInStyles();
    this.spreadInStyles.forEach(
      (value, name) => {
        this.render.setStyle(this.elementRef.nativeElement, name, value);
      }
    );
  }
  ngOnChanges(changes: SimpleChanges) {
    const state = changes['stateTrigger'];
    if (state) {
      if (state.currentValue === 'start') {
        this.spreadIn();

      } else {
        this.clearStyles();
      }
    }
  }
  clearStyles() {
    this.spreadInStyles.forEach(
      (value, name) => {
        this.render.removeStyle(this.elementRef.nativeElement, name);
      }
    );
    this.spreadOutStyles.forEach(
      (value, name) => {
        this.render.removeStyle(this.elementRef.nativeElement, name);
      }
    );
  }

}
