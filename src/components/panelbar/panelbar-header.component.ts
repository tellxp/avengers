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
import {DomService} from '../core/dom.service';
import {WidgetComponent, WidgetPosition} from '../core/widget.component';
import {PanelbarItemComponent} from './panelbar-item.component';


@Component({
  selector: 'ave-panelbar-header',
  templateUrl: 'panelbar-header.component.html',
  styleUrls: ['panelbar-header.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [DomService]
})
export class PanelbarHeaderComponent extends WidgetComponent implements OnChanges,
  OnInit,
  DoCheck,
  AfterContentInit, AfterContentChecked,
  AfterViewInit, AfterViewChecked,
  OnDestroy {

  @Input() showArrow: boolean;
  @HostBinding('class.v-panelbar-header') panelbarHeaderClass = 'true';
  @HostBinding('attr.tabindex') tabIndex = '-1';
  motionState: string;
  mouseEvent: MouseEvent;
  mousePosition: WidgetPosition;
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
  constructor(elementRef: ElementRef, domService: DomService) {
    super(elementRef, domService);
    this.motionState = 'none';
    this.mousePosition = new WidgetPosition();
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
