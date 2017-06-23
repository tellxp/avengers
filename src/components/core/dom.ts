import {Renderer2} from '@angular/core';
import {ElementPosition, ElementStyle, Widget} from './widget';

export class Dom {

  public static getElementPosition(element: any): ElementPosition {
    const position: ElementPosition = new ElementPosition();
    if (element instanceof Widget) {
      position.left = element.elementRef.nativeElement.offsetLeft;
      position.top = element.elementRef.nativeElement.top;
    } else if (element instanceof HTMLElement) {
      position.left = element.offsetLeft;
      position.top = element.offsetTop;
    } else {
      throw Error('Unknown element, check anchor type!');
    }
    return position;
  }

  public static getElementStyle(element: any): ElementStyle {
    const style: ElementStyle = new ElementStyle();
    if (element instanceof Widget) {
      style.width = element.elementRef.nativeElement.clientWidth;
      style.height = element.elementRef.nativeElement.clientHeight;
    } else if (element instanceof HTMLElement) {
      style.height = element.clientHeight;
      style.width = element.clientWidth;
    } else {
      throw Error('Unknown element, check anchor type!');
    }
    return style;
  }


}

export enum BreakPoints {
  xs = 320,
  sm = 576,
  md = 768,
  lg = 992,
  xl = 1200,
}
