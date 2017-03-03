import {
  Component,
  OnInit,
  Input,
  ElementRef,
  AfterViewInit,
  Renderer,
  AfterViewChecked,
  QueryList,
  AfterContentInit,
  ViewChildren
} from "@angular/core";
import {DomService, ElementPosition, ElementStyle} from "../common/dom.service";
import {isNullOrUndefined} from "util";


@Component({
  selector: 'ave-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss'],
  providers: [DomService]
})
export class Popup implements OnInit, AfterViewInit, AfterViewChecked, AfterContentInit {
  @Input() anchor: any;
  @Input() orientation: PopupOrientation;
  @Input() offset: ElementPosition;

  private anchorPosition: ElementPosition;
  private anchorStyle: ElementStyle;
  private position: ElementPosition;
  public style: ElementStyle;

  constructor(private el: ElementRef, public dom: DomService, public render: Renderer) {
    this.anchorPosition = new ElementPosition();
    this.anchorStyle = new ElementStyle();
    this.orientation = PopupOrientation.Bottom;
    this.offset = new ElementPosition();
    this.position = new ElementPosition();
    this.style = new ElementStyle();
  }

  ngAfterViewChecked() {
    this.setPosition();
  }

  ngOnInit() {
  }
  ngAfterViewInit() {

  }

  ngAfterContentInit() {

  }
  setPosition() {
    if (isNullOrUndefined(this.anchor.domService)) {
      this.anchorPosition = this.dom.getElementPosition(this.anchor);
      this.anchorStyle = this.dom.getElementStyle(this.anchor);
    } else {
      this.anchorPosition = this.anchor.domService.getElementPosition();
      this.anchorStyle = this.anchor.domService.getElementPosition();
    }
    this.position = this.calculatePosition(this.anchorPosition, this.anchorStyle, this.orientation, this.offset);
    this.render.setElementStyle(this.el.nativeElement, 'left', this.position.left + 'px');
    this.render.setElementStyle(this.el.nativeElement, 'top', this.position.top + 'px');
  }

  setStyle(style: ElementStyle) {
    this.render.setElementStyle(this.el.nativeElement, 'width', style.width + 'px');
    this.render.setElementStyle(this.el.nativeElement, 'height', style.height + 'px');
  }
  calculatePosition(anchorPosition: ElementPosition, anchorStyle: ElementStyle,
                    orientation:PopupOrientation, offset: ElementPosition): ElementPosition {
    let position = new ElementPosition();
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
  //   this.anchorBtn = <Button>this.parent;
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
