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
  ViewChild
} from '@angular/core';
import {DomService} from '../core/dom.service';
import {WidgetComponent} from '../core/widget.component';

@Component({
  selector: 'ave-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
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
  state: string;
  mouseEvent: MouseEvent;

  @HostBinding('attr.tabindex') tabIndex = '-1';
  @HostBinding('class.v-button') buttonClass = 'true';

  @HostListener('mousedown', ['$event']) onMousedown($event) {
    this.mouseEvent = $event;
    this.state = 'mousedown';
  }

  @HostListener('mouseup') onMouseup() {
    this.state = 'mouseup';
  }



  constructor(elementRef: ElementRef, domService: DomService, private render: Renderer2) {
    super(elementRef, domService);
  }

  ngOnChanges() {
    super.ngOnChanges();
    this.value = 'ngOnChanges';
    // console.log(this.value);
  }

  ngOnInit() {
    super.ngOnInit();
    this.value = 'ngOnInit';
    this.state = 'base';
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
    this.motionLayer.nativeElement.addEventListener('animationstart', this.OnAnimationStart.bind(this, this));
    this.motionLayer.nativeElement.addEventListener('animationend', this.OnAnimationEnd.bind(this, this));
    // console.log(this.value);

  }
  OnAnimationStart() {
    const offsetX = this.mouseEvent.offsetX;
    const offsetY = this.mouseEvent.offsetY;
    this.render.setStyle(this.motionLayer.nativeElement, 'transform-origin', `${offsetX}px` + ' ' + `${offsetY}px`);
  }
  OnAnimationEnd() {
    if (this.state === 'mouseup') {
      this.state = 'base';
    }
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

  getHostElement() {
    return this.elementRef.nativeElement;
  }
}
