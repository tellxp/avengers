import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  DoCheck,
  ElementRef,
  OnChanges,
  OnDestroy,
  OnInit
} from '@angular/core';
import {isNullOrUndefined} from 'util';

export class Widget implements OnChanges,
  OnInit,
  DoCheck,
  AfterContentInit, AfterContentChecked,
  AfterViewInit, AfterViewChecked,
  OnDestroy {
  public elementRef: ElementRef;

  static getValidValue<T>(field: T, value: T): T {
    if (isNullOrUndefined(field)) {
      return value;
    } else {
      return field;
    }
  }

  public static isTopLeft(offsetPosition: ElementPosition, hostStyle: ElementStyle): boolean {
    if (offsetPosition.left < hostStyle.width / 2 && offsetPosition.top < hostStyle.height / 2) {
      return true;
    } else {
      return false;
    }
  }

  public static isTopRight(offsetPosition: ElementPosition, hostStyle: ElementStyle): boolean {
    if (offsetPosition.left > hostStyle.width / 2 && offsetPosition.top < hostStyle.height / 2) {
      return true;
    } else {
      return false;
    }
  }

  public static isBottomLeft(offsetPosition: ElementPosition, hostStyle: ElementStyle): boolean {
    if (offsetPosition.left < hostStyle.width / 2 && offsetPosition.top > hostStyle.height / 2) {
      return true;
    } else {
      return false;
    }
  }

  public static isBottomRight(offsetPosition: ElementPosition, hostStyle: ElementStyle): boolean {
    if (offsetPosition.left > hostStyle.width / 2 && offsetPosition.top > hostStyle.height / 2) {
      return true;
    } else {
      return false;
    }
  }

  public static   calculateHypotenuse(edge1: number, edge2: number): number {
    return Math.sqrt(
      Math.pow(edge1, 2) + Math.pow(edge2, 2)
    );
  }

  public static calculateIntersectCircleRadius(startPosition: ElementPosition, hostStyle: ElementStyle): number {
    let radius = 0;
    if (Widget.isTopLeft(startPosition, hostStyle)) {
      radius = Widget.calculateHypotenuse(hostStyle.width - startPosition.left, hostStyle.height - startPosition.top);
      return radius;
    }

    if (Widget.isTopRight(startPosition, hostStyle)) {
      radius = Widget.calculateHypotenuse(startPosition.left, hostStyle.height - startPosition.top);
      return radius;
    }

    if (Widget.isBottomLeft(startPosition, hostStyle)) {
      radius = Widget.calculateHypotenuse(hostStyle.width - startPosition.left, startPosition.top);
      return radius;
    }

    if (Widget.isBottomRight(startPosition, hostStyle)) {
      radius = Widget.calculateHypotenuse(startPosition.left, startPosition.top);
      return radius;
    }
  }

  public static calculateIntersectCirclePosition(startPosition: ElementPosition, hostStyle: ElementStyle): ElementPosition {
    const position: ElementPosition = new ElementPosition();
    const radius = Widget.calculateIntersectCircleRadius(startPosition, hostStyle);
    position.top = startPosition.top - radius;
    position.left = startPosition.left - radius;
    return position;
  }
  public static getViewportScrollPosition(documentRect: ClientRect) {

    // The top-left-corner of the viewport is determined by the scroll position of the document
    // body, normally just (scrollLeft, scrollTop). However, Chrome and Firefox disagree about
    // whether `document.body` or `document.documentElement` is the scrolled element, so reading
    // `scrollTop` and `scrollLeft` is inconsistent. However, using the bounding rect of
    // `document.documentElement` works consistently, where the `top` and `left` values will
    // equal negative the scroll position.
    const top = -documentRect.top || document.body.scrollTop || window.scrollY ||
      document.documentElement.scrollTop || 0;

    const left = -documentRect.left || document.body.scrollLeft || window.scrollX ||
      document.documentElement.scrollLeft || 0;

    return {top, left};
  }

  constructor(elementRef?: ElementRef) {
    this.elementRef = elementRef;
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

  }

  ngAfterViewChecked() {

  }

  ngOnDestroy() {

  }

}
export class ElementPosition {
  top: number;
  left: number;

  constructor(top?: number, left?: number) {
    this.top = Widget.getValidValue(left, 0);
    this.left = Widget.getValidValue(top, 0);
  }
}

export class ElementStyle {
  width: number;
  height: number;

  constructor(width?: number, height?: number) {
    this.width = Widget.getValidValue(width, 0);
    this.height = Widget.getValidValue(height, 0);
  }
}
