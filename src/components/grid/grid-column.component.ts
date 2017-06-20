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
import {isNullOrUndefined} from 'util';
import {GridComponent} from './grid.component';
import {BreakPoints, Dom} from '../core/dom';

export class GridColumnConfig {
  span: number;
  offset: number;
  //
  // xs: number;
  // sm: number;
  // md: number;
  // lg: number;
  // xl: number;
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

  @Input() md: number;
  @Input() offset: number;

  xsConfig: GridColumnConfig = new GridColumnConfig();
  smConfig: GridColumnConfig = new GridColumnConfig();
  mdConfig: GridColumnConfig = new GridColumnConfig();
  lgConfig: GridColumnConfig = new GridColumnConfig();
  xlConfig: GridColumnConfig = new GridColumnConfig();

  @Input('xs.span') set xsSpan(val) {
    this.xsConfig.span = val
  }

  @Input('xs.offset') set xsOffset(val) {
    this.xsConfig.offset = val
  }

  @Input('sm.span') set smSpan(val) {
    this.smConfig.span = val
  }

  @Input('sm.offset') set smOffset(val) {
    this.smConfig.offset = val
  }

  @Input('md.span') set mdSpan(val) {
    this.mdConfig.span = val
  }

  @Input('md.offset') set mdOffset(val) {
    this.mdConfig.offset = val
  }

  @Input('lg.span') set lgSpan(val) {
    this.lgConfig.span = val
  }

  @Input('lg.offset') set lgOffset(val) {
    this.lgConfig.offset = val
  }

  @Input('xl.span') set xlSpan(val) {
    this.xlConfig.span = val
  }

  @Input('xl.offset') set xlOffset(val) {
    this.xlConfig.offset = val
  }

  @HostBinding('class.v-grid-column') gridColumnClass = 'true';

  @HostListener('window: resize', ['$event']) onWindowResize(e) {
    console.log(e);
    console.log(BreakPoints.xl);
  }

  init() {
    if (isNullOrUndefined(this.md)) {
      // this.span = this.config.span;
    }
    if (isNullOrUndefined(this.offset)) {
      // this.offset = this.config.offset;
    }
  }

  setParentRow(row: GridRowComponent) {
    this.parentRow = row;
  }

  setWidthStyle() {
    const amount = this.parentRow.amount;
    const gutter = this.parentRow.gutter;
    const span = this.md;

    const width = GridComponent.calculateColumnWidth(amount, gutter, span);

    this.render.setStyle(this.elementRef.nativeElement, 'width', width + '%');
  }

  setPaddingStyle() {
    const gutter = this.parentRow.gutter;

    const padding = gutter / 2;

    this.render.setStyle(this.elementRef.nativeElement, 'padding-left', padding + '%');
    this.render.setStyle(this.elementRef.nativeElement, 'padding-right', padding + '%');
  }

  setMarginStyle() {

    const amount = this.parentRow.amount;
    const gutter = this.parentRow.gutter;
    const offset = this.offset;

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
