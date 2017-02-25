import {
  Component, OnInit, Input, HostListener, ElementRef, ViewContainerRef, ComponentRef,
  ViewRef, AfterViewInit, ViewChild, Renderer, trigger, transition, style, animate, AfterViewChecked, ContentChildren,
  QueryList, AfterContentInit, ViewChildren
} from '@angular/core';
import {DomService, ElementPosition, ElementStyle} from "../common/dom.service";
import {isNullOrUndefined} from "util";


@Component({
  selector: 'ave-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss'],
  host: {'tabindex': '-1', '[@fadeIn]': 'true'},
  animations: [
    trigger('fadeIn', [
      transition('void => *', [
        style({
          opacity: 0,
          height: 0
        }),
        animate('0.5s ease')
      ]),
      transition('* => void', [
        animate('0.5s ease', style({
          opacity: 0,
          height: 0
        }))
      ])
    ])
  ],
  providers: [DomService]
})
export class Popup implements OnInit, AfterViewInit, AfterViewChecked, AfterContentInit {
  @Input() anchor: any;
  @Input() orientation: PopupOrientation;
  @Input() offset: ElementPosition;

  @ViewChildren(Popup) contentPopups: QueryList<Popup>;
  private element: ElementRef;
  public domService: DomService;
  private anchorPosition: ElementPosition;
  private anchorStyle: ElementStyle;
  private position: ElementPosition;
  public style: ElementStyle;
  private renderer: Renderer;

  constructor(el: ElementRef, dom: DomService, renderer: Renderer) {
    this.anchorPosition = new ElementPosition();
    this.anchorStyle = new ElementStyle();
    this.orientation = PopupOrientation.Bottom;
    this.offset = new ElementPosition();
    this.position = new ElementPosition();
    this.style = new ElementStyle();
    this.renderer = renderer;
    this.element = el;
    this.domService = dom;
    this.domService.loadElement(this.element);
  }

  ngAfterViewChecked() {
  }

  ngOnInit() {
  }
  ngAfterViewInit() {

  }

  ngAfterContentInit() {
    this.setPosition();
    // this.setStyle();



  }
  setPosition() {
    if (isNullOrUndefined(this.anchor.domService)) {
      this.anchorPosition = this.domService.getElementPosition(this.anchor);
      this.anchorStyle = this.domService.getElementStyle(this.anchor);
    } else {
      this.anchorPosition = this.anchor.domService.getComponentPosition();
      this.anchorStyle = this.anchor.domService.getComponentStyle();
    }
    this.position = this.calculatePosition(this.anchorPosition, this.anchorStyle, this.orientation, this.offset);
    this.renderer.setElementStyle(this.element.nativeElement, 'left', this.position.left + 'px');
    this.renderer.setElementStyle(this.element.nativeElement, 'top', this.position.top + 'px');
  }

  setStyle() {
    this.renderer.setElementStyle(this.element.nativeElement, 'width', this.style.width + 'px');
    this.renderer.setElementStyle(this.element.nativeElement, 'height', this.style.height + 'px');
  }
  calculatePosition(elPosition: ElementPosition, elStyle: ElementStyle,
                    orientation:PopupOrientation, offset: ElementPosition): ElementPosition {
    let value = new ElementPosition();
    switch (orientation) {
      case PopupOrientation.Left:
        value.left = elPosition.left + offset.left;
        value.top = elPosition.top + offset.top;
        break;
      case PopupOrientation.Top:
        value.left = elPosition.left + offset.left;
        value.top = elPosition.left + offset.top;
        break;
      case PopupOrientation.Right:
        value.left = elPosition.left + elStyle.width + offset.left;
        value.top = elPosition.top + offset.top;
        break;
      case PopupOrientation.Bottom:
        value.left = elPosition.left + offset.left;
        value.top = elPosition.top + elStyle.height + offset.top;
        break;
      default:
        throw Error("Unmatched orientation");
    }
    return value;
  }

  // @HostListener("window:scroll", [])
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
