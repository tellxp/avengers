import {Injectable, Renderer} from "@angular/core";

@Injectable()
export class DomService {

  public element: HTMLElement;
  public bindWidget(el: HTMLElement) {
    this.element = el;
  }
  public getWidgetPosition(): ElementPosition {
    let position: ElementPosition = new ElementPosition();
    position.left = this.element.offsetLeft;
    position.top = this.element.offsetTop;
    return position;
  }

  public getWidgetStyle(): ElementStyle {
    let style: ElementStyle = new ElementStyle();
    style.height = this.element.offsetHeight;
    style.width = this.element.offsetWidth;
    return style;
  }

  public getElementPosition(el: HTMLElement): ElementPosition {
    let position: ElementPosition = new ElementPosition();
    position.left = el.offsetLeft;
    position.top = el.offsetTop;
    return position;
  }

  public getElementStyle(el: HTMLElement): ElementStyle {
    let style: ElementStyle = new ElementStyle();
    style.height = el.offsetHeight;
    style.width = el.offsetWidth;
    return style;
  }

  public setElementPositioningType(type: PositioningType, el: HTMLElement, render: Renderer) {
    switch (type) {
      case PositioningType.Absolute:
        render.setElementStyle(el, 'position', 'absolute');
        break;
      case PositioningType.Fixed:
        render.setElementStyle(el, 'position', 'fixed');
        break;
      case PositioningType.Static:
        render.setElementStyle(el, 'position', 'static');
        break;
      case PositioningType.Relative:
        render.setElementStyle(el, 'position', 'relative');
        break;
      default:
        throw Error('Unmatched type');
    }
  }
  public setElementPosition(type: PositioningType, position: ElementPosition, el: HTMLElement, render: Renderer) {
    render.setElementStyle(el, 'left', position.left + 'px');
    render.setElementStyle(el, 'top', position.top + 'px');
  }

  public setElementStyle(style: ElementStyle, el: HTMLElement, render: Renderer) {
    render.setElementStyle(el, 'width', style.width + 'px');
    render.setElementStyle(el, 'height', style.height + 'px');
  }
}

export enum PositioningType {
  Absolute,
  Fixed,
  Static,
  Relative
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
