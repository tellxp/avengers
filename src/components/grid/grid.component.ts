import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  ElementRef,
  Input,
  OnChanges,
  OnDestroy,
  OnInit, Renderer2
} from '@angular/core';
import {DomService} from '../widget/dom.service';
import {WidgetComponent} from '../widget/widget.component';
import {isNullOrUndefined} from "util";


@Component({
  selector: 'ave-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss'],
  providers: [DomService]
})
export class GridComponent extends WidgetComponent implements OnChanges,
  OnInit,
  DoCheck,
  AfterContentInit, AfterContentChecked,
  AfterViewInit, AfterViewChecked,
  OnDestroy {

  @Input() width: string;
  @Input() height: string;
  @Input() alignment: string;

  init() {
    if (isNullOrUndefined(this.width)) {
      this.width = 'auto';
    }
    if (isNullOrUndefined(this.height)) {
      this.height = 'auto';
    }
    if (isNullOrUndefined(this.alignment)) {
      this.alignment = 'row';
    }
  }
  setStyle() {
    this.render.setStyle(this.elementRef.nativeElement, 'width', this.width);
    this.render.setStyle(this.elementRef.nativeElement, 'height', this.height);
    this.render.setStyle(this.elementRef.nativeElement, 'flex-flow', this.alignment);
  }
  constructor(elementRef: ElementRef, domService: DomService, private render: Renderer2) {
    super(elementRef, domService);
  }

  ngOnChanges() {
    super.ngOnChanges();
  }

  ngOnInit() {
    super.ngOnInit();

    this.init();
  }

  ngDoCheck() {
    super.ngDoCheck();
  }

  ngAfterContentInit() {
    super.ngAfterContentInit();

  }

  ngAfterContentChecked() {
    super.ngAfterContentChecked();
    this.setStyle();

  }

  ngAfterViewInit() {
    super.ngAfterViewInit();
  }

  ngAfterViewChecked() {
    super.ngAfterViewChecked();
  }

  ngOnDestroy() {
    super.ngOnDestroy();
  }

}
