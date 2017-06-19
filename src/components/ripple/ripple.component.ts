import {Component, HostBinding, Input, OnChanges, SimpleChange, SimpleChanges, ViewEncapsulation} from '@angular/core';
import {ElementPosition, ElementStyle, Widget} from '../core/widget';

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

  @HostBinding('class.v-ripple') 'true';

  @Input() trigger: HTMLElement;
  @Input() hostStyle: ElementStyle;
  @Input() startPosition: ElementPosition;

  private triggerEvents = new Map<string, any>();
  private triggerElement: HTMLElement;

  rippleElementPosition: ElementPosition = new ElementPosition();
  rippleElementStyle: ElementStyle = new ElementStyle();

  rippleElementRefs: RippleElementRef[];

  constructor() {
    this.rippleElementRefs = [];
    this.rippleElementPosition = new ElementPosition();
    this.rippleElementStyle = new ElementStyle();

    this.triggerEvents.set('mousedown', this.onMousedown.bind(this));
    this.triggerEvents.set('mouseup', this.onMouseup.bind(this));
    this.triggerEvents.set('mouseleave', this.onMouseLeave.bind(this));

  }

  onMousedown(event: MouseEvent) {
    this.setRipplePositionAndStyle(event.pageX, event.pageY);
    this.renderRippleElements();
  }

  onMouseup() {
    this.rippleElementRefs = [];
  }

  onMouseLeave() {
    this.onMouseup();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['trigger'] && this.trigger) {
      this.setTriggerElement(this.trigger);
    }

  }

  setTriggerElement(element: HTMLElement) {
    // Remove all previously register event listeners from the trigger element.
    if (this.triggerElement) {
      this.triggerEvents.forEach((fn, type) => this.triggerElement.removeEventListener(type, fn));
    }

    if (element) {
      // If the element is not null, register all event listeners on the trigger element.
      this.triggerEvents.forEach((fn, type) => element.addEventListener(type, fn));
    }

    this.triggerElement = element;
  }
  private distanceToFurthestCorner(x: number, y: number, rect: ClientRect): number {
    const distX = Math.max(Math.abs(x - rect.left), Math.abs(x - rect.right));
    const distY = Math.max(Math.abs(y - rect.top), Math.abs(y - rect.bottom));
    return Math.sqrt(distX * distX + distY * distY);
  }
  private setRipplePositionAndStyle(pageX: number, pageY: number) {
    const containerRect = this.triggerElement.getBoundingClientRect();

    const scrollPosition = Widget.getViewportScrollPosition(document.documentElement.getBoundingClientRect());
    pageX -= scrollPosition.left;
    pageY -= scrollPosition.top;
    const radius = this.distanceToFurthestCorner(pageX, pageY, containerRect);
    const offsetX = pageX - containerRect.left;
    const offsetY = pageY - containerRect.top;
    this.rippleElementPosition.top = offsetY - radius;
    this.rippleElementPosition.left = offsetX - radius;

    this.rippleElementStyle.width = radius * 2;
    this.rippleElementStyle.height = radius * 2;
  }

  private renderRippleElements() {
    const rippleElementRef = new RippleElementRef(this.rippleElementPosition, this.rippleElementStyle);
    this.rippleElementRefs.push(rippleElementRef);
  }
}
