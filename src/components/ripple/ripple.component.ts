import {
  AfterViewChecked,
  ChangeDetectorRef,
  Component,
  ElementRef,
  Input,
  OnChanges,
  QueryList,
  Renderer2,
  SimpleChange,
  SimpleChanges,
  ViewChildren,
  ViewEncapsulation
} from '@angular/core';
import {DomService} from '../core/dom.service';
import {WidgetComponent, WidgetPosition, WidgetStyle} from '../core/widget.component';
import {RippleElementComponent} from './ripple-element.component';
import {AnimationBuilder, transition, trigger, useAnimation} from '@angular/animations';
import {scaleIn} from '../animation/scale-animations';
import {fadeout} from '../animation/fade-animations';

export class RippleElementItem {
  mousePosition: WidgetPosition;
}
@Component({
  selector: 'ave-ripple',
  templateUrl: './ripple.component.html',
  styleUrls: ['./ripple.component.scss'],
  animations: [
    trigger('ripple', [
      transition('void => *',
        useAnimation(scaleIn, {
          params: {
            start: 'scale(0)',
            duration: '560ms',
            end: 'scale(1)'
          }
        })
      ),
      transition('* => void',
        useAnimation(fadeout, {
          params: {
            start: '1',
            duration: '560ms',
            end: '0'
          }
        })
      )
    ])
  ],
  encapsulation: ViewEncapsulation.None,
  providers: [DomService]
})
export class RippleComponent implements OnChanges, AfterViewChecked {

  @Input() stateTriggerKey: string;
  @Input() hostStyle: WidgetStyle;
  @Input() rippleStartPosition: WidgetPosition;

  rippleElementItems: RippleElementItem[];

  @ViewChildren(RippleElementComponent) viewRippleElements: QueryList<RippleElementComponent>;

  stateTriggerValue: SimpleChange;
  rippleRadius: number;
  rippleElementPosition: WidgetPosition = new WidgetPosition();
  rippleElementStyle: WidgetStyle = new WidgetStyle();

  rippleElements: RippleElementComponent[];

  constructor(private elementRef: ElementRef, private builder: AnimationBuilder, private render: Renderer2, private cdr: ChangeDetectorRef) {
    this.rippleElementItems = [];

  }

  ngOnChanges(changes: SimpleChanges) {
    this.stateTriggerValue = changes['stateTriggerKey'];
    if (this.stateTriggerValue) {
      if (this.stateTriggerValue.currentValue === 'start') {
        const rippleItem = new RippleElementItem();
        this.rippleElementItems.push(rippleItem);
        this.cdr.detectChanges();
        this.rippleElements = this.viewRippleElements.toArray();
        const length = this.rippleElements.length;
        this.rippleRadius = WidgetComponent.calculateIntersectCircleRadius(this.rippleStartPosition, this.hostStyle);
        this.rippleElementPosition = WidgetComponent.calculateIntersectCirclePosition(this.rippleStartPosition, this.hostStyle);
        this.rippleElementStyle.width = this.rippleRadius * 2;
        this.rippleElementStyle.height = this.rippleRadius * 2;

        this.render.setStyle(this.rippleElements[length - 1].elementRef.nativeElement, 'top', `${this.rippleElementPosition.top}px`);
        this.render.setStyle(this.rippleElements[length - 1].elementRef.nativeElement, 'left', `${this.rippleElementPosition.left}px`);
        this.render.setStyle(this.rippleElements[length - 1].elementRef.nativeElement, 'width', `${this.rippleElementStyle.width}px`);
        this.render.setStyle(this.rippleElements[length - 1].elementRef.nativeElement, 'height', `${this.rippleElementStyle.height}px`);
      }
      if (this.stateTriggerValue.currentValue === 'end') {
        this.rippleElementItems = [];
      }
    }
  }

  ngAfterViewChecked() {
    this.rippleElements = this.viewRippleElements.toArray();
  }
}
