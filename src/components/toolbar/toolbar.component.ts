import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  ElementRef, HostBinding, Input,
  OnChanges,
  OnDestroy,
  OnInit, Renderer2,
  ViewEncapsulation
} from '@angular/core';
import {Widget} from '../core/widget';
import {Dom} from '../core/dom';


@Component({
  selector: 'ave-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ToolbarComponent extends Widget implements OnChanges,
  OnInit,
  DoCheck,
  AfterContentInit, AfterContentChecked,
  AfterViewInit, AfterViewChecked,
  OnDestroy {

  @HostBinding('class.v-toolbar') 'true';
  @Input() fixed: boolean;
  @Input() anchor: any;
  constructor(elementRef: ElementRef, private render: Renderer2) {
    super(elementRef);
  }

  ngOnChanges() {
    super.ngOnChanges();
  }

  ngOnInit() {
    super.ngOnInit();
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
    this.setPositionAndStyle();
  }

  ngOnDestroy() {
    super.ngOnDestroy();
  }

  setPositionAndStyle() {
    if (this.fixed) {
      const anchorPosition = Dom.getElementPosition(this.anchor);
      const anchorStyle = Dom.getElementStyle(this.anchor);
      this.render.setStyle(this.elementRef.nativeElement, 'position', 'fixed');
      this.render.setStyle(this.elementRef.nativeElement, 'left', `${anchorPosition.left}px`);
      this.render.setStyle(this.elementRef.nativeElement, 'width', `${anchorStyle.width}px`);
    } else {
      this.render.setStyle(this.elementRef.nativeElement, 'position', 'relative');
    }
  }
}
