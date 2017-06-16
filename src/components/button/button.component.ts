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
  OnInit,
  Renderer2,
  ViewEncapsulation
} from '@angular/core';
import {Dom} from '../core/dom';
import {Widget, ElementPosition, ElementStyle} from '../core/widget';

@Component({
  selector: 'ave-button',
  templateUrl: 'button.component.html',
  styleUrls: ['button.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ButtonComponent extends Widget implements OnChanges,
  OnInit,
  DoCheck,
  AfterContentInit, AfterContentChecked,
  AfterViewInit, AfterViewChecked,
  OnDestroy {

  @Input() value;
  mousePosition: ElementPosition;
  hostStyle: ElementStyle;
  motionState: string;
  mouseEvent: MouseEvent;

  @HostListener('mousedown', ['$event']) onMousedown($event) {
    this.mouseEvent = $event;
    this.mousePosition = new ElementPosition();
    this.mousePosition.left = this.mouseEvent.offsetX;
    this.mousePosition.top = this.mouseEvent.offsetY;
    this.hostStyle = Dom.getElementStyle(this.elementRef.nativeElement);
    this.motionState = 'start';
  }

  @HostListener('mouseup') onMouseup() {
    this.motionState = 'end';
  }

  @HostBinding('attr.tabindex') '-1';
  @HostBinding('class.v-button') 'true';


  constructor(elementRef: ElementRef, private render: Renderer2) {
    super(elementRef);
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
