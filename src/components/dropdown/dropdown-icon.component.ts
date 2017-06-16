import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  ElementRef, HostBinding, HostListener,
  OnChanges,
  OnDestroy,
  OnInit,
  ViewEncapsulation
} from '@angular/core';
import {Dom} from '../core/dom';
import {Widget, ElementPosition} from '../core/widget';


@Component({
  selector: 'ave-dropdown-icon',
  templateUrl: './dropdown-icon.component.html',
  styleUrls: ['./dropdown-icon.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DropdownIconComponent extends Widget implements OnChanges,
  OnInit,
  DoCheck,
  AfterContentInit, AfterContentChecked,
  AfterViewInit, AfterViewChecked,
  OnDestroy {
  @HostBinding('class.v-dropdown-icon') 'true';
  @HostBinding('attr.tabindex') '-1';
  // mousePosition: WidgetPosition;
  //
  // motionState: string;
  // mouseEvent: MouseEvent;
  // @HostListener('mousedown', ['$event']) onMousedown($event) {
  //   this.mouseEvent = $event;
  //   this.mousePosition = new WidgetPosition();
  //   this.mousePosition.left = this.mouseEvent.offsetX;
  //   this.mousePosition.top = this.mouseEvent.offsetY;
  //   this.motionState = 'start';
  // }
  //
  // @HostListener('mouseup') onMouseup() {
  //   this.motionState = 'end';
  // }
  constructor(elementRef: ElementRef) {
    super(elementRef);
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
