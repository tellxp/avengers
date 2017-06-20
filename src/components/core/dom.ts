import {Renderer2} from '@angular/core';
import {ElementPosition, ElementStyle} from './widget';

export class Dom {

  public static getElementPosition(el: HTMLElement): ElementPosition {
    const position: ElementPosition = new ElementPosition();
    position.left = el.offsetLeft;
    position.top = el.offsetTop;
    return position;
  }

  public static getElementStyle(el: HTMLElement): ElementStyle {
    const style: ElementStyle = new ElementStyle();
    style.height = el.clientHeight;
    style.width = el.clientWidth;
    return style;
  }


  public static setElementPosition(position: ElementPosition, el: HTMLElement, renderer: Renderer2) {
    renderer.setStyle(el, 'left', position.left + 'px');
    renderer.setStyle(el, 'top', position.top + 'px');
  }

  public static setElementStyle(style: ElementStyle, el: HTMLElement, renderer: Renderer2) {
    renderer.setStyle(el, 'width', style.width + 'px');
    renderer.setStyle(el, 'height', style.height + 'px');
  }
}

export enum BreakPoints {
  xs = 320,
  sm = 576,
  md = 768,
  lg = 992,
  xl = 1200,
}
