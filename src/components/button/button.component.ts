import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  ElementRef,
  HostBinding,
  HostListener,
  Input,
  OnChanges,
  OnDestroy,
  OnInit, Renderer2,
  ViewChild, ViewEncapsulation
} from '@angular/core';
import {DomService} from '../core/dom.service';
import {WidgetComponent, WidgetPosition} from '../core/widget.component';

@Component({
  selector: 'ave-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [DomService]
})
export class ButtonComponent extends WidgetComponent implements OnChanges,
  OnInit,
  DoCheck,
  AfterContentInit, AfterContentChecked,
  AfterViewInit, AfterViewChecked,
  OnDestroy {

  @Input() value;
  @ViewChild('motion') motionLayer: ElementRef;
  mousePosition: WidgetPosition;

  motionState: string;
  mouseEvent: MouseEvent;


  @HostBinding('attr.tabindex') tabIndex = '-1';
  @HostBinding('class.v-button') buttonClass = 'true';

  @HostListener('mousedown', ['$event']) onMousedown($event) {
    this.mouseEvent = $event;
    this.mousePosition.left = this.mouseEvent.offsetX;
    this.mousePosition.top = this.mouseEvent.offsetY;
    this.motionState = 'start';
  }

  @HostListener('mouseup') onMouseup() {
    this.motionState = 'end';
  }

  constructor(elementRef: ElementRef, domService: DomService, private render: Renderer2) {
    super(elementRef, domService);
    this.motionState = 'none';
    this.mousePosition = new WidgetPosition();
  }


  ngOnChanges() {
    super.ngOnChanges();
    this.value = 'ngOnChanges';
    // console.log(this.value);
  }

  ngOnInit() {
    super.ngOnInit();
    this.value = 'ngOnInit';

    // console.log(this.value);

  }

  ngDoCheck() {
    super.ngDoCheck();
    this.value = 'ngDoCheck';
    // console.log(this.value);

  }

  ngAfterContentInit() {
    super.ngAfterContentInit();
    this.value = 'ngAfterContentInit';
    // console.log(this.value);

  }

  ngAfterContentChecked() {
    super.ngAfterContentChecked();
    this.value = 'ngAfterContentChecked';
    // console.log(this.value);

  }

  getMotionElement() {
    return this.motionLayer;
  }

  ngAfterViewInit() {
    super.ngAfterViewInit();
    this.value = 'ngAfterViewInit';
    // console.log(this.value);

  }
  ngAfterViewChecked() {
    super.ngAfterViewChecked();
    this.value = 'ngAfterViewChecked';
    // console.log(this.value);
  }

  ngOnDestroy() {
    super.ngOnDestroy();
    this.value = 'ngOnDestroy';
    // console.log(this.value);
  }
}
