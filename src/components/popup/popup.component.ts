import {
  Component, OnInit, Input, HostListener, ElementRef, ViewContainerRef, ComponentRef,
  ViewRef, AfterViewInit, ViewChild, Renderer
} from '@angular/core';
import {DomService, ElementPosition, ElementStyle} from "../common/dom.service";


@Component({
  selector: 'ave-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss'],
  host: {'tabindex': '-1'},
  providers:[DomService]
})
export class Popup implements OnInit, AfterViewInit {
  @Input() anchor: any;
  private element: ElementRef;
  private domService: DomService;
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
    this.anchorPosition = this.anchor.domService.getElementPosition();
    this.anchorStyle = this.anchor.domService.getElementStyle();
    this.position.left = this.anchorPosition.left;
    this.position.top = this.anchorPosition.top + this.anchorStyle.height;

    this.renderer.setElementStyle(this.element.nativeElement,'left',this.position.left + 'px');
    this.renderer.setElementStyle(this.element.nativeElement,'top',this.position.top + 'px');
    this.renderer.setElementStyle(this.element.nativeElement,'width','auto');
  }
  ngOnInit() {
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
