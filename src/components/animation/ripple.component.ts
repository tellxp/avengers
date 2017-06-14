import {
  Component,
  ElementRef,
  HostBinding,
  Input,
  OnChanges,
  Renderer2,
  SimpleChange,
  SimpleChanges,
  ViewEncapsulation
} from '@angular/core';
import {WidgetComponent, WidgetPosition, WidgetStyle} from '../core/widget.component';
import {DomService} from '../core/dom.service';
import {animate, AnimationEvent, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'ave-ripple',
  templateUrl: './ripple.component.html',
  styleUrls: ['./ripple.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: [
    trigger('ripple', [
      state('inactive', style({
        transform: 'scale(0)',
        opacity: 0,
      })),
      state('active', style({
        transform: 'scale(1)',
        opacity: 1,
      })),
      transition('inactive => active',
        [
          style({
            transform: 'scale(0)',
            opacity: 1,
          }),
          animate('280ms cubic-bezier(0,0,0.2,1)',
            style({
              transform: 'scale(1)',
              opacity: 1,
            }),
          )
        ]
      ),
      transition('active => inactive',
        [
          style({
            opacity: 1,
          }),
          animate('140ms cubic-bezier(0,0,0.2,1)',
            style({
              opacity: 0,
            }),
          )
        ]
      ),
    ]),
  ],
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

  rippleState: string;
  @HostBinding('class.v-ripple') 'true';

  constructor(private elementRef: ElementRef, private render: Renderer2) {
    this.rippleState = 'inactive';
  }

  rippleStart($event: AnimationEvent) {
    if ($event.fromState === 'inactive') {
      this.rippleRadius = WidgetComponent.calculateIntersectCircleRadius(this.rippleStartPosition, this.hostStyle);
      this.rippleElementPosition = WidgetComponent.calculateIntersectCirclePosition(this.rippleStartPosition, this.hostStyle);
      this.rippleElementStyle.width = this.rippleRadius * 2;
      this.rippleElementStyle.height = this.rippleRadius * 2;
    }
    if ($event.fromState === 'active') {
      if (this.stateTriggerValue.currentValue === 'start') {
        this.rippleState = 'active';
      }
    }
  }

  rippleDone($event: AnimationEvent) {

    if ($event.toState === 'active') {
      if (this.stateTriggerValue.currentValue === 'start') {
        this.rippleState = 'active';
      }
      if (this.stateTriggerValue.currentValue === 'end') {
        this.rippleState = 'inactive';
      }

    }
  }

  ngOnChanges(changes: SimpleChanges) {
    this.stateTriggerValue = changes['stateTriggerKey'];
    if (this.stateTriggerValue) {
      if (this.stateTriggerValue.currentValue === 'start') {
        this.rippleState = 'active';
      }
      if (this.stateTriggerValue.currentValue === 'end') {
        this.rippleState = 'inactive';
      }
    }
  }

}
