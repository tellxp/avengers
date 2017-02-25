import {Injectable, ElementRef, Component} from '@angular/core';

@Injectable()
export class DomService {

  element: ElementRef;
  elementPosition = new ElementPosition();
  elementStyle = new ElementStyle();

  loadElement(el: ElementRef) {
    this.element = el;
  }
  public getComponentPosition(): ElementPosition {
    this.elementPosition.left = this.element.nativeElement.offsetLeft;
    this.elementPosition.top = this.element.nativeElement.offsetTop;
    return this.elementPosition;
  }

  public getComponentStyle(): ElementStyle {
    this.elementStyle.height = this.element.nativeElement.offsetHeight;
    this.elementStyle.width = this.element.nativeElement.offsetWidth;
    return this.elementStyle;
  }
  public getElementPosition(el: HTMLElement): ElementPosition {
    this.elementPosition.left = el.offsetLeft;
    this.elementPosition.top = el.offsetTop;
    return this.elementPosition;
  }
  public getElementStyle(el: HTMLElement): ElementStyle {
    this.elementStyle.height = el.offsetHeight;
    this.elementStyle.width = el.offsetWidth;
    return this.elementStyle;
  }

}



export class ElementPosition {
  left: number;
  top: number;
  constructor() {
    this.left = 0;
    this.top = 0;
  }
}

export class ElementStyle {
  height: number;
  width: number;
  constructor() {
    this.height = 0;
    this.width = 0;
  }
}
