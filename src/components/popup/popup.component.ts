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
  OnDestroy, OnChanges, DoCheck, Renderer2
} from '@angular/core';
import {DomService, ElementPosition, ElementStyle} from '../common/dom.service';
import {WidgetComponent} from '../common/widget.component';


@Component({
  selector: 'ave-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss'],
  providers: [DomService]
})
export class PopupComponent extends WidgetComponent implements OnChanges,
  OnInit,
  DoCheck,
  AfterContentInit, AfterContentChecked,
  AfterViewInit, AfterViewChecked,
  OnDestroy {

  @Input() anchor: any;
  @Input() orientation: PopupOrientation;
  @Input() offset: ElementPosition;


  constructor(elementRef: ElementRef, domService: DomService, private render: Renderer2) {
    super(elementRef, domService);

  }
  ngOnChanges() {
    super.ngOnChanges();
  }

  ngOnInit() {
    super.ngOnInit();

    this.orientation = PopupOrientation.Bottom;
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
    this.dom.setElementPosition(this.position, this.element, this.render);

  }

  calculatePosition(anchorPosition: ElementPosition, anchorStyle: ElementStyle,
                    orientation: PopupOrientation, offset: ElementPosition): ElementPosition {
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
