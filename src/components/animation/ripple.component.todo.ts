import {Component, ElementRef, HostBinding, Input, OnChanges, Renderer2, SimpleChanges, ViewChild, ViewEncapsulation} from '@angular/core';
import {WidgetPosition, WidgetStyle} from '../core/widget.component';
import {DomService} from '../core/dom.service';
import {animate, AnimationEvent, keyframes, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'ave-ripple-todo',
  templateUrl: 'ripple.component.html',
  styleUrls: ['ripple.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: [
    trigger('ripple', [
      state('inactive', style({
        top: '0',
        left: '0',
        width: '0',
        height: '0',
        // transform: 'scale(0.000001)'
        opacity: '0',
      })),
      state('active', style({
        top: `${this.rippleElementPosition.top}px`,
        left: `${this.rippleElementPosition.left}px`,
        width: `${this.rippleElementStyle.width}px`,
        height: `${this.rippleElementStyle.height}px`,
        // transform: 'scale(1.3)'
        opacity: '1',

      })),
      transition('inactive => active',
        [
          animate('5000ms cubic-bezier(0,0,0.2,1)',
            keyframes([
              style({transform: 'scale(0.1)', offset: 0}),
              style({transform: 'scale(1)', offset: 1}),
            ])
          )
        ]),
      transition('active => inactive',
        [
          animate('5000ms cubic-bezier(0,0,0.2,1)',
            keyframes([
              style({transform: 'scale(1)', offset: 0}),
              style({transform: 'scale(0.1)', offset: 1}),
            ])
          )
        ])
    ]),
  ],
  providers: [DomService]
})
export class RippleTodoComponent implements OnChanges {

  @Input() stateTrigger: string;
  @Input() hostStyle: WidgetStyle;
  @Input() rippleStartPosition: WidgetPosition;

  @ViewChild('motion') motionLayer: ElementRef;

  rippleRadius: number;
  rippleElementPosition: WidgetPosition = new WidgetPosition();
  rippleElementStyle: WidgetStyle;

  rippleState = 'none';
  fadeState = 'none';
  @HostBinding('class.v-ripple') rippleCssClass = 'true';

  constructor(private elementRef: ElementRef, private render: Renderer2) {
    this.rippleState = 'inactive';
    this.fadeState = 'fadeOut';
  }

  rippleStart($event: AnimationEvent) {
    if ($event.fromState === 'inactive') {
      this.render.setStyle(this.motionLayer.nativeElement, 'top', `${this.rippleElementPosition.top}px`);
      this.render.setStyle(this.motionLayer.nativeElement, 'left', `${this.rippleElementPosition.left}px`);
      this.render.setStyle(this.motionLayer.nativeElement, 'width', `${this.rippleElementStyle.width}px`);
      this.render.setStyle(this.motionLayer.nativeElement, 'height', `${this.rippleElementStyle.height}px`);

    }
    if ($event.fromState === 'active') {
      // this.render.setStyle(this.motionLayer.nativeElement, 'top', `${this.rippleElementPosition.top}px`);
      // this.render.setStyle(this.motionLayer.nativeElement, 'left', `${this.rippleElementPosition.left}px`);
      // this.render.setStyle(this.motionLayer.nativeElement, 'width', `${this.rippleElementStyle.width}px`);
      // this.render.setStyle(this.motionLayer.nativeElement, 'height', `${this.rippleElementStyle.height}px`);
    }
    console.log($event);
  }

  rippleDone($event: AnimationEvent) {
    if ($event.fromState === 'active') {

      // this.render.removeStyle(this.motionLayer.nativeElement, 'top');
      // this.render.removeStyle(this.motionLayer.nativeElement, 'left');
      // this.render.removeStyle(this.motionLayer.nativeElement, 'width');
      // this.render.removeStyle(this.motionLayer.nativeElement, 'height');
    }
    if ($event.fromState === 'inactive') {
      // this.render.removeStyle(this.motionLayer.nativeElement, 'top');
      // this.render.removeStyle(this.motionLayer.nativeElement, 'left');
      // this.render.removeStyle(this.motionLayer.nativeElement, 'width');
      // this.render.removeStyle(this.motionLayer.nativeElement, 'height');
    }
    console.log($event);

  }

  rippleStyle: {};

  setRippleStyle() {
    this.rippleStyle = {
      'top': this.rippleState === 'active' ? `${this.rippleElementPosition.top}px` : '0px',
      'left': this.rippleState === 'active' ? `${this.rippleElementPosition.left}px` : '0px',
      'width': this.rippleState === 'active' ? `${this.rippleElementStyle.width}px` : '0px',
      'height': this.rippleState === 'active' ? `${this.rippleElementStyle.height}px` : '0px',
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    const state = changes['stateTrigger'];
    if (state) {
      if (state.currentValue === 'start') {
        this.rippleRadius = this.calculateRippleElementRadius(this.rippleStartPosition, this.hostStyle);
        this.rippleElementPosition = this.calculateRippleElementPosition(this.rippleStartPosition, this.hostStyle);
        this.rippleElementStyle = this.calculateRippleElementStyle(this.rippleRadius);
        this.rippleState = 'active';


      }
      if (state.currentValue === 'end') {
        this.rippleState = 'inactive';
      }
    }

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
    } else {
      return false;
    }
  }

  isTopRight(offsetPosition: WidgetPosition, hostStyle: WidgetStyle): boolean {
    if (offsetPosition.left > hostStyle.width / 2 && offsetPosition.top < hostStyle.height / 2) {
      return true;
    } else {
      return false;
    }
  }

  isBottomLeft(offsetPosition: WidgetPosition, hostStyle: WidgetStyle): boolean {
    if (offsetPosition.left < hostStyle.width / 2 && offsetPosition.top > hostStyle.height / 2) {
      return true;
    } else {
      return false;
    }
  }

  isBottomRight(offsetPosition: WidgetPosition, hostStyle: WidgetStyle): boolean {
    if (offsetPosition.left > hostStyle.width / 2 && offsetPosition.top > hostStyle.height / 2) {
      return true;
    } else {
      return false;
    }
  }
}