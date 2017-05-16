import {Injectable, Renderer2} from '@angular/core';

@Injectable()
export class DomService {

  public element: HTMLElement;

  public bindElement(el: HTMLElement) {
    this.element = el;
  }

  public getBindedElementPosition(): ElementPosition {
    const position: ElementPosition = new ElementPosition();
    position.left = this.element.offsetLeft;
    position.top = this.element.offsetTop;
    return position;
  }

  public getBindedElementStyle(): ElementStyle {
    const style: ElementStyle = new ElementStyle();
    style.height = this.element.offsetHeight;
    style.width = this.element.offsetWidth;
    return style;
  }

  public getElementPosition(el: HTMLElement): ElementPosition {
    const position: ElementPosition = new ElementPosition();
    position.left = el.offsetLeft;
    position.top = el.offsetTop;
    return position;
  }

  public getElementStyle(el: HTMLElement): ElementStyle {
    const style: ElementStyle = new ElementStyle();
    style.height = el.offsetHeight;
    style.width = el.offsetWidth;
    return style;
  }

  public setElementPositioningType(type: PositioningType, el: HTMLElement, render: Renderer2) {
    switch (type) {
      case PositioningType.Absolute:
        render.setStyle(el, 'position', 'absolute');
        break;
      case PositioningType.Fixed:
        render.setStyle(el, 'position', 'fixed');
        break;
      case PositioningType.Static:
        render.setStyle(el, 'position', 'static');
        break;
      case PositioningType.Relative:
        render.setStyle(el, 'position', 'relative');
        break;
      default:
        throw Error('Unmatched type');
    }
  }

  public setElementPosition(position: ElementPosition, el: HTMLElement, renderer: Renderer2) {
    renderer.setStyle(el, 'left', position.left + 'px');
    renderer.setStyle(el, 'top', position.top + 'px');
  }

  public setElementStyle(style: ElementStyle, el: HTMLElement, renderer: Renderer2) {
    renderer.setStyle(el, 'width', style.width + 'px');
    renderer.setStyle(el, 'height', style.height + 'px');
  }

  public setBindedElementPosition(position: ElementPosition, renderer: Renderer2) {
    this.setElementPosition(position, this.element, renderer);
  }

  public setBindedElementStyle(style: ElementStyle, renderer: Renderer2) {
    this.setElementStyle(style, this.element, renderer);
  }

  public setBindedElementPositioningType(type: PositioningType, renderer: Renderer2) {
    this.setElementPositioningType(type, this.element, renderer);
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
