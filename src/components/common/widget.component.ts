import {
  ElementRef,
  AfterViewChecked,
  OnInit,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  OnDestroy
} from "@angular/core";
import {DomService} from "./dom.service";

export class Widget implements OnInit, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
  public position: WidgetPosition;
  public style: WidgetStyle;
  public element: HTMLElement;
  public dom: DomService;

  constructor(elementRef: ElementRef, domService: DomService) {

    this.element = elementRef.nativeElement;
    this.dom = domService;
  }

  public checkPosition() {
    this.position.left = this.dom.getBoundElementPosition().left;
    this.position.top = this.dom.getBoundElementPosition().top;
  }

  public checkStyle() {
    this.style.width = this.dom.getBoundElementStyle().width;
    this.style.height = this.dom.getBoundElementStyle().height;
  }

  ngOnInit() {
    this.position = new WidgetPosition();
    this.style = new WidgetStyle();

    this.dom.bindElement(this.element);
  }

  ngAfterContentInit() {

  }

  ngAfterContentChecked() {

  }

  ngAfterViewInit() {

  }

  ngAfterViewChecked() {
    this.checkPosition();
    this.checkStyle();
  }

  ngOnDestroy() {

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
