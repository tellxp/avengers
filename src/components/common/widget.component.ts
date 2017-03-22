import {
  ElementRef,
  AfterViewChecked,
  OnInit,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  OnDestroy, OnChanges, DoCheck
} from "@angular/core";
import {DomService} from "./dom.service";

export class Widget implements OnChanges,
  OnInit,
  DoCheck ,
  AfterContentInit, AfterContentChecked,
  AfterViewInit, AfterViewChecked,
  OnDestroy {
  public position: WidgetPosition;
  public style: WidgetStyle;
  public element: HTMLElement;
  public dom: DomService;

  constructor(elementRef: ElementRef, domService: DomService) {

    this.element = elementRef.nativeElement;
    this.dom = domService;
  }

  public checkPosition() {
    this.position.left = this.dom.getBindedElementPosition().left;
    this.position.top = this.dom.getBindedElementPosition().top;
  }

  public checkStyle() {
    this.style.width = this.dom.getBindedElementStyle().width;
    this.style.height = this.dom.getBindedElementStyle().height;
  }
  ngOnChanges() {

  }

  ngOnInit() {
    this.position = new WidgetPosition();
    this.style = new WidgetStyle();

    this.dom.bindElement(this.element);
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
