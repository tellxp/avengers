import {Component, Input, OnChanges, QueryList, SimpleChange, SimpleChanges, ViewChildren, ViewEncapsulation} from '@angular/core';
import {DomService} from '../core/dom.service';
import {WidgetPosition, WidgetStyle} from '../core/widget.component';
import {RippleElementComponent} from './ripple-element.component';
import {AnimationBuilder} from '@angular/animations';

export class RippleElementItem {
  mousePosition: WidgetPosition;
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

  @Input() rippleElementItems: RippleElementItem[];

  @ViewChildren(RippleElementComponent) viewRippleElements: QueryList<RippleElementComponent>;
  stateTriggerValue: SimpleChange;

  rippleElements: RippleElementComponent[];

  constructor(private builder: AnimationBuilder) {
    this.rippleElementItems = [];

  }

  ngOnChanges(changes: SimpleChanges) {
    this.stateTriggerValue = changes['stateTriggerKey'];
    if (this.stateTriggerValue) {
      if (this.stateTriggerValue.currentValue === 'start') {

      }
      if (this.stateTriggerValue.currentValue === 'end') {

      }
    }
  }
}
