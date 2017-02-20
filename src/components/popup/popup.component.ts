import {
  Component, OnInit, Input, HostListener, ElementRef, ViewContainerRef, ComponentRef,
  ViewRef, AfterViewInit, ViewChild, Renderer, trigger, transition, style, animate
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
export class Popup implements OnInit, AfterViewInit {
  @Input() anchor: any;
  private element: ElementRef;
  public domService: DomService;
  private anchorPosition: ElementPosition = new ElementPosition();
  private anchorStyle: ElementStyle = new ElementStyle();
  private position: ElementPosition = new ElementPosition();
  private renderer: Renderer;

  constructor(el: ElementRef, dom: DomService, renderer: Renderer) {
    this.renderer = renderer;
    this.element = el;
    this.domService = dom;
    this.domService.loadElement(this.element);
  }

  ngAfterViewInit() {
    this.setPosition();
    this.renderer.setElementStyle(this.element.nativeElement, 'left', this.position.left + 'px');
    this.renderer.setElementStyle(this.element.nativeElement, 'top', this.position.top + 'px');
    this.renderer.setElementStyle(this.element.nativeElement, 'width', 'auto');
  }

  ngOnInit() {
  }

  setPosition() {
    if (isNullOrUndefined(this.anchor.domService)) {
      this.anchorPosition = this.domService.getElementPosition(this.anchor);
      this.anchorStyle = this.domService.getElementStyle(this.anchor);
    } else {
      this.anchorPosition = this.anchor.domService.getComponentPosition();
      this.anchorStyle = this.anchor.domService.getComponentStyle();
    }
    this.position.left = this.anchorPosition.left;
    this.position.top = this.anchorPosition.top + this.anchorStyle.height;
  }

  // @HostListener("window:scroll", [])
  // onWindowScroll() {
  //   this.anchorBtn = <Button>this.anchor;
  //   let styles = {
  //     'left': true ? this.anchorBtn.left + 'px' : '0px',
  //     'top': true ? this.anchorBtn.top + 'px' : '0px'
  //   };
  // }
}
