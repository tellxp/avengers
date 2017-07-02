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
  OnInit,
  Renderer2,
  ViewEncapsulation
} from '@angular/core';
import {Widget} from '../core/widget';
import {GridRowComponent} from './grid-row.component';
import {GridComponent} from './grid.component';
import {BreakPoints} from '../core/dom';

export class GridColumnConfig {
  span: number;
  offset: number;

  constructor() {
    this.span = 1;
    this.offset = 0;
  }
}

@Component({
  selector: 'ave-grid-column',
  templateUrl: './grid-column.component.html',
  styleUrls: ['./grid-column.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class GridColumnComponent extends Widget implements OnChanges,
  OnInit,
  DoCheck,
  AfterContentInit, AfterContentChecked,
  AfterViewInit, AfterViewChecked,
  OnDestroy {

  parentRow: GridRowComponent;
  hidden = false;

  effectiveSpan: number;
  effectiveOffset: number;

  xsConfig: GridColumnConfig = new GridColumnConfig();
  smConfig: GridColumnConfig = new GridColumnConfig();
  mdConfig: GridColumnConfig = new GridColumnConfig();
  lgConfig: GridColumnConfig = new GridColumnConfig();
  xlConfig: GridColumnConfig = new GridColumnConfig();

  @Input('span') set span(val: number) {
    this.xsConfig.span = val;
    this.smConfig.span = val;
    this.mdConfig.span = val;
    this.lgConfig.span = val;
    this.xlConfig.span = val;
  }

  @Input('offset') set offset(val) {
    this.xsConfig.offset = val;
    this.smConfig.offset = val;
    this.mdConfig.offset = val;
    this.lgConfig.offset = val;
    this.xlConfig.offset = val;
  }

  @Input('xs.span')
  set xsSpan(val) {
    this.xsConfig.span = val;
    this.smConfig.span = val;
    this.mdConfig.span = val;
    this.lgConfig.span = val;
    this.xlConfig.span = val;
  }

  @Input('xs.offset')
  set xsOffset(val) {
    this.xsConfig.offset = val;
    this.smConfig.offset = val;
    this.mdConfig.offset = val;
    this.lgConfig.offset = val;
    this.xlConfig.offset = val;
  }

  @Input('sm.span')
  set smSpan(val) {
    this.smConfig.span = val;
    this.mdConfig.span = val;
    this.lgConfig.span = val;
    this.xlConfig.span = val;
  }

  @Input('sm.offset') set smOffset(val) {
    this.smConfig.offset = val;
    this.mdConfig.offset = val;
    this.lgConfig.offset = val;
    this.xlConfig.offset = val;
  }

  @Input('md.span') set mdSpan(val) {
    this.mdConfig.span = val;
    this.lgConfig.span = val;
    this.xlConfig.span = val;
  }

  @Input('md.offset') set mdOffset(val) {
    this.mdConfig.offset = val;
    this.lgConfig.offset = val;
    this.xlConfig.offset = val;
  }

  @Input('lg.span') set lgSpan(val) {
    this.lgConfig.span = val;
    this.xlConfig.span = val;
  }

  @Input('lg.offset') set lgOffset(val) {
    this.lgConfig.offset = val;
    this.xlConfig.offset = val;
  }

  @Input('xl.span') set xlSpan(val) {
    this.xlConfig.span = val
  }

  @Input('xl.offset') set xlOffset(val) {
    this.xlConfig.offset = val
  }

  @HostBinding('class.v-grid-column') gridColumnClass = 'true';

  @HostListener('window: resize') onWindowResize() {
    const windowWidth = window.innerWidth;
    this.setStyleByWindowsWidth(windowWidth);

  }
  hideColumn() {
      this.render.setStyle(this.elementRef.nativeElement, 'display', 'none');
  }
  setStyleByWindowsWidth(windowWidth: number) {
    switch (true) {
      case BreakPoints.xs >= windowWidth:
        this.setEffectiveStyle(this.xsConfig.span, this.xsConfig.offset);
        break;
      case BreakPoints.xs < windowWidth && windowWidth <= BreakPoints.sm:
        this.setEffectiveStyle(this.xsConfig.span, this.xsConfig.offset);
        break;
      case BreakPoints.sm < windowWidth && windowWidth <= BreakPoints.md:
        this.setEffectiveStyle(this.smConfig.span, this.smConfig.offset);
        break;
      case BreakPoints.md < windowWidth && windowWidth <= BreakPoints.lg:
        this.setEffectiveStyle(this.mdConfig.span, this.mdConfig.offset);
        break;
      case BreakPoints.lg < windowWidth && windowWidth <= BreakPoints.xl:
        this.setEffectiveStyle(this.lgConfig.span, this.lgConfig.offset);
        break;
      case BreakPoints.xl < windowWidth:
        this.setEffectiveStyle(this.xlConfig.span, this.xlConfig.offset);
        break;
    }
    if (this.effectiveSpan <= 0) {
      this.hideColumn();
    }
  }
  setEffectiveStyle(span: number, offset: number) {
    this.effectiveSpan = span;
    this.effectiveOffset = offset;
    this.render.setStyle(this.elementRef.nativeElement, 'display', 'flex');
    this.setWidthStyle(span);
    this.setMarginStyle(offset);
    this.setPaddingStyle();
  }

  init() {
    // if (isNullOrUndefined(this.innerSpan)) {
    //   // this.span = this.config.span;
    // }
    // if (isNullOrUndefined(this.innerOffset)) {
    //   // this.offset = this.config.offset;
    // }
  }

  setParentRow(row: GridRowComponent) {
    this.parentRow = row;
  }

  setWidthStyle(span: number) {
    const amount = this.parentRow.amount;
    const gutter = this.parentRow.gutter;

    const width = GridComponent.calculateColumnWidth(amount, gutter, span);
    if (width > 0) {
      this.hidden = false;
    } else {
      this.hidden = true;
    }

    this.render.setStyle(this.elementRef.nativeElement, 'width', width + '%');
  }

  setPaddingStyle() {
    const gutter = this.parentRow.gutter;

    const padding = gutter / 2;

    this.render.setStyle(this.elementRef.nativeElement, 'padding-left', padding + '%');
    this.render.setStyle(this.elementRef.nativeElement, 'padding-right', padding + '%');
  }

  setMarginStyle(offset: number) {

    const amount = this.parentRow.amount;
    const gutter = this.parentRow.gutter;

    const offsetMargin = GridComponent.calculateColumnOffset(amount, gutter, offset);

    this.render.setStyle(this.elementRef.nativeElement, 'margin-left', offsetMargin + '%');
  }


  constructor(elementRef: ElementRef, public render: Renderer2) {
    super(elementRef);
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
