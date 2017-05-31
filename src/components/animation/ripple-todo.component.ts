import {Component, ElementRef, HostBinding, Input, OnChanges, Renderer2, SimpleChanges, ViewChild, ViewEncapsulation} from '@angular/core';
import {WidgetPosition, WidgetStyle} from '../core/widget.component';
import {DomService} from '../core/dom.service';
import {animate, AnimationEvent, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'ave-ripple-todo',
  templateUrl: './ripple-todo.component.html',
  styleUrls: ['./ripple-todo.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: [
    trigger('ripple', [
      state('none', style({
        // top: '*',
        // left: '*',
        // width: '*',
        // height: '*',
        transform: 'scale(0)',
        opacity: 0,
      })),
      state('rippleIn', style({
        // top: '*',
        // left: '*',
        // width: '*',
        // height: '*',
        transform: 'scale(1)',
        opacity: 1,

      })),
      state('fadeOut', style({
        // top: '*',
        // left: '*',
        // width: '*',
        // height: '*',
        transform: 'scale(0)',
        opacity: 1,


      })),
      transition('none => rippleIn',
        [
          style({
            transform: 'scale(0)',
            opacity: 1,
          }),
          animate('300ms cubic-bezier(0,0,0.2,1)',
            style({
              transform: 'scale(1)',
              opacity: 1,
            }),
          )
        ]),
      transition('rippleIn => fadeOut',
        [
          style({
            transform: 'scale(1)',
            opacity: 1,
          }),
          animate('1ms',
            style({
              transform: 'scale(0)',
              opacity: 1,
            }),
          )
        ]),
      transition('fadeOut => none',
        [
          style({
            // transform: 'scale(0)',
            opacity: '1',
          }),
          animate('500ms cubic-bezier(0,0,0.2,1)',
            style({
              // transform: 'scale(1)',
              opacity: '0'
            }),
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
  rippleElementStyle: WidgetStyle = new WidgetStyle();

  rippleState = 'none';
  @HostBinding('class.v-ripple') rippleCssClass = 'true';

  constructor(private elementRef: ElementRef, private render: Renderer2) {
    this.rippleState = 'none';
  }

  rippleStart($event: AnimationEvent) {
    if ($event.fromState === 'rippleIn') {

    }
    if ($event.fromState === 'active') {

    }
  }

  rippleDone($event: AnimationEvent) {
    if ($event.fromState === 'rippleIn') {
      this.rippleState = 'none';

    }
    if ($event.fromState === 'fadeOut') {


    }
  }

  ngOnChanges(changes: SimpleChanges) {
    const state = changes['stateTrigger'];
    if (state) {
      if (state.currentValue === 'start') {
        this.rippleRadius = this.calculateRippleElementRadius(this.rippleStartPosition, this.hostStyle);
        this.rippleElementPosition = this.calculateRippleElementPosition(this.rippleStartPosition, this.hostStyle);
        this.rippleElementStyle = this.calculateRippleElementStyle(this.rippleRadius);
        this.rippleState = 'rippleIn';

      }
      if (state.currentValue === 'end') {
        // this.rippleElementPosition = new WidgetPosition();
        // this.rippleElementStyle = new WidgetStyle();
        this.rippleState = 'fadeOut';

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
