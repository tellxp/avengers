import {
  AfterViewChecked, Component, Directive, ElementRef, HostBinding, HostListener, Input, OnChanges, OnInit, Renderer2,
  SimpleChanges, ViewChild, ViewEncapsulation
} from '@angular/core';
import {WidgetComponent, WidgetPosition, WidgetStyle} from '../core/widget.component';
import {DomService} from '../core/dom.service';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'ave-ripple',
  templateUrl: 'ripple.component.html',
  styleUrls: ['ripple.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [DomService]
})
export class RippleComponent implements OnChanges {

  @Input() stateTrigger: string;
  @Input() hostStyle: WidgetStyle;
  @Input() rippleStartPosition: WidgetPosition;

  @ViewChild('motion') motionLayer: ElementRef;
  rippleRadius: number;
  rippleElementPosition: WidgetPosition;
  rippleElementStyle: WidgetStyle;

  rippleInStyles = new Map<string, string>();
  rippleOutStyles = new Map<string, string>();

  @HostBinding('class.v-ripple') rippleCssClass = 'true';
  @HostListener('animationstart') OnAnimationStart() {
  }
  @HostListener('animationend') OnAnimationEnd() {
    if (this.stateTrigger === 'end') {
      this.clearStyles();
    }
  }
  constructor(private elementRef: ElementRef, private render: Renderer2) {

  }
  ngOnChanges(changes: SimpleChanges) {
    const state = changes['stateTrigger'];
    if (state) {
      if (state.currentValue === 'start') {
        this.rippleRadius = this.calculateRippleElementRadius(this.rippleStartPosition, this.hostStyle);
        this.rippleElementPosition = this.calculateRippleElementPosition(this.rippleStartPosition, this.hostStyle);
        this.rippleElementStyle = this.calculateRippleElementStyle(this.rippleRadius);
        this.rippleIn();
      }
      if (state.currentValue === 'end') {
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
    this.rippleOutStyles.set('background-color', 'rgba(255, 255, 255, 0.618)');
  }

  rippleIn() {
    this.composeRippleInStyles();
    this.rippleInStyles.forEach(
      (value, name) => {
        this.render.setStyle(this.motionLayer.nativeElement, name, value);
      }
    );
  }
  rippleOut() {
    this.composeRippleOutStyles();
    this.rippleOutStyles.forEach(
      (value, name) => {
        this.render.setStyle(this.motionLayer.nativeElement, name, value);
      }
    );
  }
  clearStyles() {
    this.rippleInStyles.forEach(
      (value, name) => {
        this.render.removeStyle(this.motionLayer.nativeElement, name);
      }
    );
    this.rippleOutStyles.forEach(
      (value, name) => {
        this.render.removeStyle(this.motionLayer.nativeElement, name);
      }
    );
  }
  calculateRippleElementRadius(startPosition: WidgetPosition, hostStyle: WidgetStyle): number {
    let radius = 0;
    if (hostStyle.width > hostStyle.height) {
      if (this.isTopLeft(startPosition, hostStyle)) {
        radius = this.calculateHypotenuse(hostStyle.width - startPosition.left, hostStyle.height - startPosition.top);
        return radius;
      }

      if (this.isTopRight(startPosition, hostStyle)) {
        radius = this.calculateHypotenuse(startPosition.left, hostStyle.height - startPosition.top);
        return radius;
      }

      if (this.isBottomLeft(startPosition, hostStyle)) {
        radius = this.calculateHypotenuse(hostStyle.width - startPosition.left, startPosition.top);
        return radius;
      }

      if (this.isBottomRight(startPosition, hostStyle)) {
        radius = this.calculateHypotenuse(startPosition.left, startPosition.top);
        return radius;
      }
    }
  }
  calculateHypotenuse(edge1: number, edge2: number): number {
    return Math.sqrt(
      Math.pow(edge1, 2) + Math.pow(edge2, 2)
    );
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
