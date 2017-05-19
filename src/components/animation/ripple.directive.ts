import {AfterViewChecked, Directive, ElementRef, HostListener, Input, OnChanges, OnInit, Renderer2, SimpleChanges} from '@angular/core';
import {WidgetComponent, WidgetPosition, WidgetStyle} from '../core/widget.component';

@Directive(
  {
    selector: '[aveRipple]',
  }
)
export class RippleDirective implements OnInit, OnChanges {

  @Input() trigger: string;
  @Input() offsetX: number;
  @Input() offsetY: number;
  @Input() width: number;
  @Input() height: number;

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
        this.rippleRadius = this.calculateRippleElementRadius(this.offsetX, this.offsetY, this.width, this.height);
        this.rippleElementPosition = this.calculateRippleElementPosition(this.offsetX, this.offsetY, this.width, this.height);
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
  calculateRippleElementRadius(offsetX: number, offsetY: number, width: number, height: number): number {
    let radius = 0;
    if (width > height) {
      if (this.isTopLeft(offsetX, offsetY, width, height)) {
        radius = Math.sqrt(
          Math.pow(width - offsetX, 2) + Math.pow(height - offsetY, 2)
        );
        return radius;
      }

      if (this.isTopRight(offsetX, offsetY, width, height)) {
        radius = Math.sqrt(
          Math.pow(offsetX, 2) + Math.pow(height - offsetY, 2)
        );
        return radius;
      }

      if (this.isBottomLeft(offsetX, offsetY, width, height)) {
        radius = Math.sqrt(
          Math.pow(width - offsetX, 2) + Math.pow(offsetY, 2)
        );
        return radius;
      }

      if (this.isBottomRight(offsetX, offsetY, width, height)) {
        radius = Math.sqrt(
          Math.pow(offsetX, 2) + Math.pow(offsetY, 2)
        );
        return radius;
      }
    }
  }
  calculateRippleElementPosition(offsetX: number, offsetY: number, width: number, height: number): WidgetPosition {
    const position: WidgetPosition = new WidgetPosition();
    const radius = this.calculateRippleElementRadius(offsetX, offsetY, width, height);
    position.top = - (radius - offsetY);
    position.left = - (radius - offsetX);
    return position;
  }
  calculateRippleElementStyle(radius: number): WidgetStyle {
    const style: WidgetStyle = new WidgetStyle();
    style.width = radius * 2;
    style.height = radius * 2;
    return style;
  }
  isTopLeft(offsetX: number, offsetY: number, width: number, height: number): boolean {
    if (offsetX < width / 2 && offsetY < height / 2) {
      return true;
    } else  {
      return false;
    }
  }
  isTopRight(offsetX: number, offsetY: number, width: number, height: number): boolean {
    if (offsetX > width / 2 && offsetY < height / 2) {
      return true;
    } else  {
      return false;
    }
  }
  isBottomLeft(offsetX: number, offsetY: number, width: number, height: number): boolean {
    if (offsetX < width / 2 && offsetY > height / 2) {
      return true;
    } else  {
      return false;
    }
  }
  isBottomRight(offsetX: number, offsetY: number, width: number, height: number): boolean {
    if (offsetX > width / 2 && offsetY > height / 2) {
      return true;
    } else  {
      return false;
    }
  }
}
