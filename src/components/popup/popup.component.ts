import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  ElementRef,
  HostBinding,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Renderer2,
  ViewEncapsulation
} from '@angular/core';
import {Dom} from '../core/dom';
import {Widget, ElementPosition, ElementStyle} from '../core/widget';
import {isNullOrUndefined} from 'util';


@Component({
  selector: 'ave-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PopupComponent extends Widget implements OnChanges,
  OnInit,
  DoCheck,
  AfterContentInit, AfterContentChecked,
  AfterViewInit, AfterViewChecked,
  OnDestroy {

  @HostBinding('class.v-popup') 'true';
  @Input() anchor: any;
  @Input() orientation: PopupOrientation;
  @Input() offset: ElementPosition;

  position: ElementPosition;
  constructor(elementRef: ElementRef, public render: Renderer2) {
    super(elementRef);
    this.position = new ElementPosition();
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
    const style = new ElementStyle();
    style.width = this.elementRef.nativeElement.clientWidth;
    style.height = this.elementRef.nativeElement.clientHeight;
    Dom.setElementStyle(style, this.elementRef.nativeElement, this.render);
  }

  setPosition() {
    let anchorPosition: ElementPosition = new ElementPosition();
    let anchorStyle: ElementStyle = new ElementStyle();
    if (this.anchor instanceof Widget) {
      anchorPosition = Dom.getElementPosition(this.anchor.elementRef.nativeElement);

      anchorStyle = Dom.getElementStyle(this.anchor.elementRef.nativeElement);

      this.position = this.calculatePosition(anchorPosition, anchorStyle, this.orientation, this.offset);
    }
    if (this.anchor instanceof HTMLElement) {
      anchorPosition = Dom.getElementPosition(this.anchor);
      anchorStyle = Dom.getElementStyle(this.anchor);
      this.position = this.calculatePosition(anchorPosition, anchorStyle, this.orientation, this.offset);
    }
    Dom.setElementPosition(this.position, this.elementRef.nativeElement, this.render);

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

}
export enum PopupOrientation {
  Left,
  Top,
  Right,
  Bottom
}
