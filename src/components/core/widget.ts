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
import {Dom} from './dom';
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

  public static calculateHypotenuse(edge1: number, edge2: number): number {
    return Math.sqrt(
      Math.pow(edge1, 2) + Math.pow(edge2, 2)
    );
  }

  public static calculateIntersectCircleRadius(startPosition: ElementPosition, hostStyle: ElementStyle): number {
    let radius = 0;
    if (hostStyle.width > hostStyle.height) {
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
  }
  public static calculateIntersectCirclePosition(startPosition: ElementPosition, hostStyle: ElementStyle): ElementPosition {
    const position: ElementPosition = new ElementPosition();
    const radius = Widget.calculateIntersectCircleRadius(startPosition, hostStyle);
    position.top = startPosition.top - radius;
    position.left = startPosition.left - radius;
    return position;
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
