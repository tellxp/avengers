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
import {DomService} from '../core/dom.service';
import {WidgetComponent, WidgetPosition} from '../core/widget.component';


@Component({
  selector: 'ave-dropdown-icon',
  templateUrl: './dropdown-icon.component.html',
  styleUrls: ['./dropdown-icon.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [DomService]
})
export class DropdownIconComponent extends WidgetComponent implements OnChanges,
  OnInit,
  DoCheck,
  AfterContentInit, AfterContentChecked,
  AfterViewInit, AfterViewChecked,
  OnDestroy {
  @HostBinding('class.v-dropdown-icon') dropdownIconCssClass = 'true';
  @HostBinding('attr.tabindex') tabIndex = '-1';
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
  constructor(elementRef: ElementRef, domService: DomService) {
    super(elementRef, domService);
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
