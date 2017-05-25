import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  DoCheck,
  ElementRef,
  OnChanges,
  OnDestroy,
  OnInit
} from '@angular/core';
import {DomService} from './dom.service';
import {isNullOrUndefined} from 'util';

export class WidgetComponent implements OnChanges,
  OnInit,
  DoCheck,
  AfterContentInit, AfterContentChecked,
  AfterViewInit, AfterViewChecked,
  OnDestroy {
  public position: WidgetPosition;
  public style: WidgetStyle;
  public elementRef: ElementRef;
  public dom: DomService;


  static getValidValue<T>(field: T, value: T): T {
    if (isNullOrUndefined(field)) {
      return value;
    } else {
      return field;
    }
  }

  constructor(elementRef: ElementRef, domService: DomService) {

    this.elementRef = elementRef;
    this.dom = domService;

    this.position = new WidgetPosition();
    this.style = new WidgetStyle();
    this.dom.bindElement(this.elementRef.nativeElement);

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
    this.checkPosition();
    this.checkStyle();
  }

  ngAfterViewChecked() {
    this.checkPosition();
    this.checkStyle();
  }

  ngOnDestroy() {

  }

  public checkPosition() {
    this.position.left = this.dom.getBindedElementPosition().left;
    this.position.top = this.dom.getBindedElementPosition().top;
  }

  public checkStyle() {
    this.style.width = this.dom.getBindedElementStyle().width;
    this.style.height = this.dom.getBindedElementStyle().height;
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
