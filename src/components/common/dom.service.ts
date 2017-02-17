import {Injectable, ElementRef} from '@angular/core';

@Injectable()
export class DomService {

  element: ElementRef;
  elementPosition = new ElementPosition();
  elementStyle = new ElementStyle();

  loadElement(el: ElementRef) {
    this.element = el;
  }
  public getElementPosition(): ElementPosition {
    this.elementPosition.left = this.element.nativeElement.offsetLeft;
    this.elementPosition.top = this.element.nativeElement.offsetTop;
    return this.elementPosition;
  }

  public getElementStyle(): ElementStyle {
    this.elementStyle.height = this.element.nativeElement.offsetHeight;
    this.elementStyle.width = this.element.nativeElement.offsetWidth;
    return this.elementStyle;
  }
}

export class ElementPosition {
  left: number;
  top: number;
}

export class ElementStyle {
  height: number;
  width: number;
}
