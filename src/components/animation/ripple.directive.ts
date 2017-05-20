import {AfterViewChecked, Directive, ElementRef, HostListener, Input, OnChanges, OnInit, Renderer2, SimpleChanges} from '@angular/core';
import {WidgetComponent, WidgetPosition, WidgetStyle} from '../core/widget.component';

@Directive(
  {
    selector: '[aveRipple]',
  }
)
export class RippleDirective implements OnInit, OnChanges {

  @Input() trigger: string;
  @Input() hostStyle: WidgetStyle;
  @Input() rippleStartPosition: WidgetPosition;

  rippleRadius: number;
  rippleElementPosition: WidgetPosition;
  rippleElementStyle: WidgetStyle;

  rippleInStyles = new Map<string, string>();
  rippleOutStyles = new Map<string, string>();

  @HostListener('animationstart') OnAnimationStart() {
  }
  @HostListener('animationend') OnAnimationEnd() {
    if (this.trigger === 'end') {
      this.clearStyles();
    }
  }
  constructor(private elementRef: ElementRef, private render: Renderer2) {

  }
  ngOnInit() {
  }
  ngOnChanges(changes: SimpleChanges) {
    const triggerState = changes['trigger'];
    if (triggerState) {
      if (triggerState.currentValue === 'start') {
        this.rippleRadius = this.calculateRippleElementRadius(this.rippleStartPosition, this.hostStyle);
        this.rippleElementPosition = this.calculateRippleElementPosition(this.rippleStartPosition, this.hostStyle);
        this.rippleElementStyle = this.calculateRippleElementStyle(this.rippleRadius);
        this.rippleIn();
      }
      if (triggerState.currentValue === 'end') {
        this.rippleOut();
      }
    }

  }
  composeRippleInStyles() {
    this.rippleInStyles.set('top', `${this.rippleElementPosition.top}px`);
    this.rippleInStyles.set('left', `${this.rippleElementPosition.left}px`);
    this.rippleInStyles.set('width', `${this.rippleElementStyle.width}px`);
    this.rippleInStyles.set('height', `${this.rippleElementStyle.height}px`);
    this.rippleInStyles.set('animation-name', 'scale-in');
    this.rippleInStyles.set('animation-duration', '280ms');
    this.rippleInStyles.set('animation-timing-function', 'cubic-bezier(0,0,0.2,1)');
    this.rippleInStyles.set('animation-delay', '0s');
    this.rippleInStyles.set('animation-iteration-count', '1');
    this.rippleInStyles.set('animation-direction', 'alternate');
    this.rippleInStyles.set('animation-play-state', 'running');
    this.rippleInStyles.set('animation-fill-mode', 'forwards');
    this.rippleInStyles.set('background-color', 'rgba(255, 255, 255, 0.618)');
    this.rippleInStyles.set('border-radius', '50%');
  }
  composeRippleOutStyles() {
    this.rippleOutStyles.set('animation-name', 'fade-out');
    this.rippleOutStyles.set('animation-duration', '560ms');
    this.rippleOutStyles.set('animation-timing-function', 'cubic-bezier(0,0,0.2,1)');
    this.rippleOutStyles.set('animation-delay', '0s');
    this.rippleOutStyles.set('animation-iteration-count', '1');
    this.rippleOutStyles.set('animation-direction', 'alternate');
    this.rippleOutStyles.set('animation-play-state', 'running');
    this.rippleOutStyles.set('animation-fill-mode', 'none');
    this.rippleOutStyles.set('background-color', 'rgba(#ffffff, 0.618)');
  }

  rippleIn() {
    this.composeRippleInStyles();
    this.rippleInStyles.forEach(
      (value, name) => {
        this.render.setStyle(this.elementRef.nativeElement, name, value);
      }
    );
  }
  rippleOut() {
    this.composeRippleOutStyles();
    this.rippleOutStyles.forEach(
      (value, name) => {
        this.render.setStyle(this.elementRef.nativeElement, name, value);
      }
    );
  }
  clearStyles() {
    this.rippleInStyles.forEach(
      (value, name) => {
        this.render.removeStyle(this.elementRef.nativeElement, name);
      }
    );
    this.rippleOutStyles.forEach(
      (value, name) => {
        this.render.removeStyle(this.elementRef.nativeElement, name);
      }
    );
  }
  calculateRippleElementRadius(startPosition: WidgetPosition, hostStyle: WidgetStyle): number {
    let radius = 0;
    // console.log(startPosition);
    if (hostStyle.width > hostStyle.height) {
      if (this.isTopLeft(startPosition, hostStyle)) {
        radius = Math.sqrt(
          Math.pow(hostStyle.width - startPosition.left, 2) + Math.pow(hostStyle.height - startPosition.top, 2)
        );
        return radius;
      }

      if (this.isTopRight(startPosition, hostStyle)) {
        radius = Math.sqrt(
          Math.pow(startPosition.left, 2) + Math.pow(hostStyle.height - startPosition.top, 2)
        );
        return radius;
      }

      if (this.isBottomLeft(startPosition, hostStyle)) {
        radius = Math.sqrt(
          Math.pow(hostStyle.width - startPosition.left, 2) + Math.pow(startPosition.top, 2)
        );
        return radius;
      }

      if (this.isBottomRight(startPosition, hostStyle)) {
        radius = Math.sqrt(
          Math.pow(startPosition.left, 2) + Math.pow(startPosition.top, 2)
        );
        return radius;
      }
    }
  }
  calculateRippleElementPosition(startPosition: WidgetPosition, hostStyle: WidgetStyle): WidgetPosition {
    const position: WidgetPosition = new WidgetPosition();
    const radius = this.calculateRippleElementRadius(startPosition, hostStyle);
    position.top = startPosition.top - radius;
    position.left = startPosition.left - radius;
    return position;
  }
  calculateRippleElementStyle(radius: number): WidgetStyle {
    const style: WidgetStyle = new WidgetStyle();
    style.width = radius * 2;
    style.height = radius * 2;
    return style;
  }
  isTopLeft(offsetPosition: WidgetPosition, hostStyle: WidgetStyle): boolean {
    if (offsetPosition.left < hostStyle.width / 2 && offsetPosition.top < hostStyle.height / 2) {
      return true;
    } else  {
      return false;
    }
  }
  isTopRight(offsetPosition: WidgetPosition, hostStyle: WidgetStyle): boolean {
    if (offsetPosition.left > hostStyle.width / 2 && offsetPosition.top < hostStyle.height / 2) {
      return true;
    } else  {
      return false;
    }
  }
  isBottomLeft(offsetPosition: WidgetPosition, hostStyle: WidgetStyle): boolean {
    if (offsetPosition.left < hostStyle.width / 2 && offsetPosition.top > hostStyle.height / 2) {
      return true;
    } else  {
      return false;
    }
  }
  isBottomRight(offsetPosition: WidgetPosition, hostStyle: WidgetStyle): boolean {
    if (offsetPosition.left > hostStyle.width / 2 && offsetPosition.top > hostStyle.height / 2) {
      return true;
    } else  {
      return false;
    }
  }
}
