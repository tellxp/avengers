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
    this.spreadInStyles.set('animation-name', 'expand-down');
    this.spreadInStyles.set('animation-duration', '10s');
    this.spreadInStyles.set('animation-timing-function', 'cubic-bezier(0,0,0.2,1)');
    this.spreadInStyles.set('animation-delay', '0s');
    this.spreadInStyles.set('animation-iteration-count', '1');
    this.spreadInStyles.set('animation-direction', 'alternate');
    this.spreadInStyles.set('animation-play-state', 'running');
    this.spreadInStyles.set('animation-fill-mode', 'forwards');
  }
  composeSpreadOutStyles() {
    this.spreadOutStyles.set('animation-name', 'collapse-up');
    this.spreadOutStyles.set('animation-duration', '560ms');
    this.spreadOutStyles.set('animation-timing-function', 'cubic-bezier(0,0,0.2,1)');
    this.spreadOutStyles.set('animation-delay', '0s');
    this.spreadOutStyles.set('animation-iteration-count', '1');
    this.spreadOutStyles.set('animation-direction', 'alternate');
    this.spreadOutStyles.set('animation-play-state', 'running');
    this.spreadOutStyles.set('animation-fill-mode', 'none');
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
