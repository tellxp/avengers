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
import {PanelbarItemComponent} from './panelbar-item.component';


@Component({
  selector: 'ave-panelbar-header',
  templateUrl: 'panelbar-header.component.html',
  styleUrls: ['panelbar-header.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class PanelbarHeaderComponent extends Widget implements OnChanges,
  OnInit,
  DoCheck,
  AfterContentInit, AfterContentChecked,
  AfterViewInit, AfterViewChecked,
  OnDestroy {

  @Input() showArrow: boolean;
  @Input() expanded: boolean;

  @HostBinding('class.v-panelbar-header') 'true';
  @HostBinding('attr.tabindex') '-1';
  motionState: string;
  mouseEvent: MouseEvent;
  mousePosition: ElementPosition;
  parentItem: PanelbarItemComponent;

  @HostListener('mousedown', ['$event']) onMousedown($event) {
    this.mouseEvent = $event;
    this.mousePosition.left = this.mouseEvent.offsetX;
    this.mousePosition.top = this.mouseEvent.offsetY;
    this.motionState = 'start';
  }

  @HostListener('mouseup') onMouseup() {
    this.motionState = 'end';
  }
  constructor(elementRef: ElementRef) {
    super(elementRef);
    this.motionState = 'none';
    this.mousePosition = new ElementPosition();
  }
  setParentItem(item: PanelbarItemComponent) {
    this.parentItem = item;
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
