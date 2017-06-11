import {
  Component,
  Input,
  ElementRef,
  Renderer,
  AfterViewChecked,
  OnInit,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  OnDestroy, OnChanges, DoCheck, Renderer2, HostBinding, ViewEncapsulation
} from '@angular/core';
import {DomService, ElementPosition, ElementStyle} from '../core/dom.service';
import {WidgetComponent, WidgetStyle} from '../core/widget.component';
import {isNullOrUndefined} from 'util';


@Component({
  selector: 'ave-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss'],
  encapsulation: ViewEncapsulation.None,

  providers: [DomService]
})
export class PopupComponent extends WidgetComponent implements OnChanges,
  OnInit,
  DoCheck,
  AfterContentInit, AfterContentChecked,
  AfterViewInit, AfterViewChecked,
  OnDestroy {

  @HostBinding('class.v-popup') 'true';
  @Input() anchor: any;
  @Input() orientation: PopupOrientation;
  @Input() offset: ElementPosition;

  constructor(elementRef: ElementRef, domService: DomService, public render: Renderer2) {
    super(elementRef, domService);

  }
  ngOnChanges() {
    super.ngOnChanges();
  }

  ngOnInit() {
    super.ngOnInit();
    if (isNullOrUndefined(this.orientation)) {
      this.orientation = PopupOrientation.Bottom;
    }
    this.offset = new ElementPosition();
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
    this.setPosition();
    // this.setStyle();
  }
  setStyle() {
    const style = new WidgetStyle();
    style.width = this.elementRef.nativeElement.clientWidth;
    style.height = this.elementRef.nativeElement.clientHeight;
    this.dom.setElementStyle(style, this.elementRef.nativeElement, this.render);
  }
  setPosition() {
    let anchorPosition: ElementPosition = new ElementPosition();
    let anchorStyle: ElementStyle = new ElementStyle();
    if (this.anchor instanceof WidgetComponent) {
      anchorPosition.left = this.anchor.position.left;
      anchorPosition.top = this.anchor.position.top;
      anchorStyle.width = this.anchor.style.width;
      anchorStyle.height = this.anchor.style.height;
      this.position = this.calculatePosition(anchorPosition, anchorStyle, this.orientation, this.offset);
    }
    if (this.anchor instanceof HTMLElement) {
      anchorPosition = this.dom.getElementPosition(this.anchor);
      anchorStyle = this.dom.getElementStyle(this.anchor);
      this.position = this.calculatePosition(anchorPosition, anchorStyle, this.orientation, this.offset);
    }
    this.dom.setElementPosition(this.position, this.elementRef.nativeElement, this.render);

  }

  calculatePosition(anchorPosition: ElementPosition, anchorStyle: ElementStyle,
                    orientation: PopupOrientation, offset: ElementPosition): ElementPosition {
    const position = new ElementPosition();
    switch (orientation) {
      case PopupOrientation.Left:
        position.left = anchorPosition.left + offset.left;
        position.top = anchorPosition.top + offset.top;
        break;
      case PopupOrientation.Top:
        position.left = anchorPosition.left + offset.left;
        position.top = anchorPosition.left + offset.top;
        break;
      case PopupOrientation.Right:
        position.left = anchorPosition.left + anchorStyle.width + offset.left;
        position.top = anchorPosition.top + offset.top;
        break;
      case PopupOrientation.Bottom:
        position.left = anchorPosition.left + offset.left;
        position.top = anchorPosition.top + anchorStyle.height + offset.top;
        break;
      default:
        throw Error('Unmatched orientation');
    }
    return position;
  }

  // @HostListener('window:scroll', [])
  // onWindowScroll() {
  //   this.anchorBtn = <ButtonComponent>this.parent;
  //   let styles = {
  //     'left': true ? this.anchorBtn.left + 'px' : '0px',
  //     'top': true ? this.anchorBtn.top + 'px' : '0px'
  //   };
  // }
}
export enum PopupOrientation {
  Left,
  Top,
  Right,
  Bottom
}
