import {Component, Input, OnChanges, SimpleChange, SimpleChanges, ViewEncapsulation} from '@angular/core';
import {DomService} from '../core/dom.service';
import {WidgetComponent, WidgetPosition, WidgetStyle} from '../core/widget.component';

export class RippleElementRef {
  ripplePosition: WidgetPosition;
  rippleStyle: WidgetStyle;

  constructor(position: WidgetPosition, style: WidgetStyle) {
    this.ripplePosition = position;
    this.rippleStyle = style;
  }
}
@Component({
  selector: 'ave-ripple',
  templateUrl: './ripple.component.html',
  styleUrls: ['./ripple.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [DomService]
})
export class RippleComponent implements OnChanges {

  @Input() stateTriggerKey: string;
  @Input() hostStyle: WidgetStyle;
  @Input() rippleStartPosition: WidgetPosition;


  stateTriggerValue: SimpleChange;
  rippleRadius: number;
  rippleElementPosition: WidgetPosition = new WidgetPosition();
  rippleElementStyle: WidgetStyle = new WidgetStyle();

  rippleElementRefs: RippleElementRef[];

  constructor() {
    this.rippleElementRefs = [];
    this.rippleElementPosition = new WidgetPosition();
    this.rippleElementStyle = new WidgetStyle();

  }

  ngOnChanges(changes: SimpleChanges) {
    this.stateTriggerValue = changes['stateTriggerKey'];
    if (this.stateTriggerValue) {
      if (this.stateTriggerValue.currentValue === 'start') {

        this.setRipplePositonAndStyle();

        this.renderRippleElements();

      }
      if (this.stateTriggerValue.currentValue === 'end') {
        this.rippleElementRefs = [];
      }
    }
  }

  private setRipplePositonAndStyle() {
    this.rippleRadius = WidgetComponent.calculateIntersectCircleRadius(this.rippleStartPosition, this.hostStyle);
    this.rippleElementPosition = WidgetComponent.calculateIntersectCirclePosition(this.rippleStartPosition, this.hostStyle);
    this.rippleElementStyle.width = this.rippleRadius * 2;
    this.rippleElementStyle.height = this.rippleRadius * 2;
  }

  private renderRippleElements() {
    const rippleElementRef = new RippleElementRef(this.rippleElementPosition, this.rippleElementStyle);
    this.rippleElementRefs.push(rippleElementRef);
  }
}
