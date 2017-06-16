import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  ElementRef, HostBinding, HostListener, Input,
  OnChanges,
  OnDestroy,
  OnInit,
  ViewEncapsulation
} from '@angular/core';
import {Dom} from '../core/dom';
import {Widget, ElementPosition} from '../core/widget';


@Component({
  selector: 'ave-menu-header',
  templateUrl: './menu-header.component.html',
  styleUrls: ['./menu-header.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MenuHeaderComponent extends Widget implements OnChanges,
  OnInit,
  DoCheck,
  AfterContentInit, AfterContentChecked,
  AfterViewInit, AfterViewChecked,
  OnDestroy {

  @Input() isEntry: boolean;
  @Input() hasChild: boolean;

  @HostBinding('class.v-menu-header') 'true';
  @HostBinding('attr.tabindex') '-1';

  motionState: string;
  mouseEvent: MouseEvent;
  mousePosition: ElementPosition;

  @HostListener('mousedown', ['$event']) onMousedown($event) {
    this.mouseEvent = $event;
    this.mousePosition.left = this.mouseEvent.offsetX;
    this.mousePosition.top = this.mouseEvent.offsetY;
    this.motionState = 'start';
  }

  @HostListener('mouseup') onMouseup() {
    this.motionState = 'end';
  }
  @HostListener('mouseleave') onMouseleave() {
    this.motionState = 'end';
  }
  constructor(elementRef: ElementRef) {
    super(elementRef);
    this.mousePosition = new ElementPosition();
  }

  ngOnChanges() {
    super.ngOnChanges();
  }

  ngOnInit() {
    super.ngOnInit();
  }

  ngDoCheck() {
    super.ngDoCheck();
  }

  ngAfterContentInit() {
    super.ngAfterContentInit();
  }

  ngAfterContentChecked() {
    super.ngAfterContentChecked();
  }

  ngAfterViewInit() {
    super.ngAfterViewInit();
  }

  ngAfterViewChecked() {
    super.ngAfterViewChecked();
  }

  ngOnDestroy() {
    super.ngOnDestroy();
  }

}
