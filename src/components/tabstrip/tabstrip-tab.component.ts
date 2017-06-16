import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  ElementRef, HostBinding, HostListener,
  Input,
  OnChanges,
  OnDestroy,
  OnInit, ViewEncapsulation
} from '@angular/core';
import {Widget, ElementPosition} from '../core/widget';
import {Dom} from '../core/dom';
import {TabstripPageComponent} from './tabstrip-page.component';
import {TabstripComponent} from './tabstrip.component';
@Component({
  selector: 'ave-tabstrip-tab',
  templateUrl: './tabstrip-tab.component.html',
  styleUrls: ['./tabstrip-tab.component.scss'],
  encapsulation: ViewEncapsulation.None,

})
export class TabstripTabComponent extends Widget implements OnChanges,
  OnInit,
  DoCheck,
  AfterContentInit, AfterContentChecked,
  AfterViewInit, AfterViewChecked,
  OnDestroy {

  @HostBinding('class.v-tabstrip-tab') 'true';
  @HostBinding('attr.tabindex') '-1';

  @Input() bindedPage: TabstripPageComponent;
  mousePosition: ElementPosition;
  @Input() parentTabstrip: TabstripComponent;

  motionState: string;
  mouseEvent: MouseEvent;
  @HostListener('mousedown', ['$event']) onMousedown($event) {
    this.mouseEvent = $event;
    this.mousePosition = new ElementPosition();
    this.mousePosition.left = this.mouseEvent.offsetX;
    this.mousePosition.top = this.mouseEvent.offsetY;
    this.motionState = 'start';
  }

  @HostListener('mouseup') onMouseup() {
    this.motionState = 'end';
  }

  @HostListener('click') onClick() {
    this.parentTabstrip.activatePage(this.bindedPage);
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

  constructor(elementRef: ElementRef) {
    super(elementRef);
  }

}
