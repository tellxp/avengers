import {Component, Input, OnChanges, SimpleChange, SimpleChanges, ViewEncapsulation} from '@angular/core';
import {Dom} from '../core/dom';
import {Widget, ElementPosition, ElementStyle} from '../core/widget';

export class RippleElementRef {
  ripplePosition: ElementPosition;
  rippleStyle: ElementStyle;

  constructor(position: ElementPosition, style: ElementStyle) {
    this.ripplePosition = position;
    this.rippleStyle = style;
  }
}
@Component({
  selector: 'ave-ripple',
  templateUrl: './ripple.component.html',
  styleUrls: ['./ripple.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class RippleComponent implements OnChanges {

  @Input() stateTriggerKey: string;
  @Input() hostStyle: ElementStyle;
  @Input() rippleStartPosition: ElementPosition;


  stateTriggerValue: SimpleChange;
  rippleRadius: number;
  rippleElementPosition: ElementPosition = new ElementPosition();
  rippleElementStyle: ElementStyle = new ElementStyle();

  rippleElementRefs: RippleElementRef[];

  constructor() {
    this.rippleElementRefs = [];
    this.rippleElementPosition = new ElementPosition();
    this.rippleElementStyle = new ElementStyle();

  }

  ngOnChanges(changes: SimpleChanges) {
    this.stateTriggerValue = changes['stateTriggerKey'];
    if (this.stateTriggerValue) {
      if (this.stateTriggerValue.currentValue === 'start') {

        this.setRipplePositionAndStyle();

        this.renderRippleElements();

      }
      if (this.stateTriggerValue.currentValue === 'end') {
        this.rippleElementRefs = [];
      }
    }
  }

  private setRipplePositionAndStyle() {
    this.rippleRadius = Widget.calculateIntersectCircleRadius(this.rippleStartPosition, this.hostStyle);
    this.rippleElementPosition = Widget.calculateIntersectCirclePosition(this.rippleStartPosition, this.hostStyle);
    this.rippleElementStyle.width = this.rippleRadius * 2;
    this.rippleElementStyle.height = this.rippleRadius * 2;
  }

  private renderRippleElements() {
    const rippleElementRef = new RippleElementRef(this.rippleElementPosition, this.rippleElementStyle);
    this.rippleElementRefs.push(rippleElementRef);
  }
}
