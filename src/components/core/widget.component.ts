import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit, Component, ContentChild,
  DoCheck,
  ElementRef,
  OnChanges,
  OnDestroy,
  OnInit, Optional, ViewEncapsulation
} from '@angular/core';
import {DomService} from './dom.service';
import {isNullOrUndefined} from 'util';

@Component({
  selector: 'ave-widget',
  templateUrl: './widget.component.html',
  styleUrls: ['./widget.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [DomService]
})
export class WidgetComponent implements OnChanges,
  OnInit,
  DoCheck,
  AfterContentInit, AfterContentChecked,
  AfterViewInit, AfterViewChecked,
  OnDestroy {
  public position: WidgetPosition;
  public style: WidgetStyle;
  public elementRef: ElementRef;
  public dom: DomService;

  static getValidValue<T>(field: T, value: T): T {
    if (isNullOrUndefined(field)) {
      return value;
    } else {
      return field;
    }
  }
  public static isTopLeft(offsetPosition: WidgetPosition, hostStyle: WidgetStyle): boolean {
    if (offsetPosition.left < hostStyle.width / 2 && offsetPosition.top < hostStyle.height / 2) {
      return true;
    } else {
      return false;
    }
  }

  public static isTopRight(offsetPosition: WidgetPosition, hostStyle: WidgetStyle): boolean {
    if (offsetPosition.left > hostStyle.width / 2 && offsetPosition.top < hostStyle.height / 2) {
      return true;
    } else {
      return false;
    }
  }

  public static isBottomLeft(offsetPosition: WidgetPosition, hostStyle: WidgetStyle): boolean {
    if (offsetPosition.left < hostStyle.width / 2 && offsetPosition.top > hostStyle.height / 2) {
      return true;
    } else {
      return false;
    }
  }

  public static isBottomRight(offsetPosition: WidgetPosition, hostStyle: WidgetStyle): boolean {
    if (offsetPosition.left > hostStyle.width / 2 && offsetPosition.top > hostStyle.height / 2) {
      return true;
    } else {
      return false;
    }
  }

  public static calculateHypotenuse(edge1: number, edge2: number): number {
    return Math.sqrt(
      Math.pow(edge1, 2) + Math.pow(edge2, 2)
    );
  }

  public static calculateIntersectCircleRadius(startPosition: WidgetPosition, hostStyle: WidgetStyle): number {
    let radius = 0;
    if (hostStyle.width > hostStyle.height) {
      if (WidgetComponent.isTopLeft(startPosition, hostStyle)) {
        radius = WidgetComponent.calculateHypotenuse(hostStyle.width - startPosition.left, hostStyle.height - startPosition.top);
        return radius;
      }

      if (WidgetComponent.isTopRight(startPosition, hostStyle)) {
        radius = WidgetComponent.calculateHypotenuse(startPosition.left, hostStyle.height - startPosition.top);
        return radius;
      }

      if (WidgetComponent.isBottomLeft(startPosition, hostStyle)) {
        radius = WidgetComponent.calculateHypotenuse(hostStyle.width - startPosition.left, startPosition.top);
        return radius;
      }

      if (WidgetComponent.isBottomRight(startPosition, hostStyle)) {
        radius = WidgetComponent.calculateHypotenuse(startPosition.left, startPosition.top);
        return radius;
      }
    }
  }
  public static calculateIntersectCirclePosition(startPosition: WidgetPosition, hostStyle: WidgetStyle): WidgetPosition {
    const position: WidgetPosition = new WidgetPosition();
    const radius = WidgetComponent.calculateIntersectCircleRadius(startPosition, hostStyle);
    position.top = startPosition.top - radius;
    position.left = startPosition.left - radius;
    return position;
  }

  constructor(elementRef: ElementRef, domService: DomService) {

    this.elementRef = elementRef;
    this.dom = domService;

    this.position = new WidgetPosition();
    this.style = new WidgetStyle();
    this.dom.bindElement(this.elementRef.nativeElement);

  }

  ngOnChanges() {

  }

  ngOnInit() {

  }

  ngDoCheck() {

  }

  ngAfterContentInit() {

  }

  ngAfterContentChecked() {

  }

  ngAfterViewInit() {
    this.checkPosition();
    this.checkStyle();
  }

  ngAfterViewChecked() {
    this.checkPosition();
    this.checkStyle();
  }

  ngOnDestroy() {

  }

  public checkPosition() {
    this.position.left = this.dom.getBindedElementPosition().left;
    this.position.top = this.dom.getBindedElementPosition().top;
  }

  public checkStyle() {
    this.style.width = this.dom.getBindedElementStyle().width;
    this.style.height = this.dom.getBindedElementStyle().height;
  }


}
export class WidgetPosition {
  top: number;
  left: number;

  constructor(top?: number, left?: number) {
    this.top = WidgetComponent.getValidValue(left, 0);
    this.left = WidgetComponent.getValidValue(top, 0);
  }
}

export class WidgetStyle {
  width: number;
  height: number;

  constructor(width?: number, height?: number) {
    this.width = WidgetComponent.getValidValue(width, 0);
    this.height = WidgetComponent.getValidValue(height, 0);
  }
}
