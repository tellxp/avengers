import {ElementPosition, ElementStyle, PositioningType, DomService} from "./dom.service";
import {ElementRef, Component, AfterViewChecked} from "@angular/core";

export class Widget implements AfterViewChecked {
  public position: WidgetPosition;
  public style: WidgetStyle;
  constructor(public el: ElementRef, public dom: DomService) {
    this.position = new WidgetPosition();
    this.style = new WidgetStyle();
    this.dom.bindWidget(this.el.nativeElement);
  }
  public checkPosition() {
    this.position.left = this.dom.getWidgetPosition().left;
    this.position.top = this.dom.getWidgetPosition().top;
  }
  public checkStyle() {
    this.style.width = this.dom.getWidgetStyle().width;
    this.style.height = this.dom.getWidgetStyle().height;
  }
  ngAfterViewChecked() {
    this.checkPosition();
    this.checkStyle();
  }
}
export class WidgetPosition {
  left: number;
  top: number;

  constructor() {
    this.left = 0;
    this.top = 0;
  }
}

export class WidgetStyle {
  height: number;
  width: number;

  constructor() {
    this.height = 0;
    this.width = 0;
  }
}
