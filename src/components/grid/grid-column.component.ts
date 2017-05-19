import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component, ContentChildren,
  DoCheck,
  ElementRef, HostBinding,
  Input,
  OnChanges,
  OnDestroy,
  OnInit, QueryList,
  Renderer2, ViewEncapsulation
} from '@angular/core';
import {DomService} from '../core/dom.service';
import {WidgetComponent} from '../core/widget.component';
import {GridRowComponent} from './grid-row.component';
import {isNullOrUndefined} from 'util';
import {GridColumnConfig} from './grid-column.config';
import {GridComponent} from './grid.component';


@Component({
  selector: 'ave-grid-column',
  templateUrl: './grid-column.component.html',
  styleUrls: ['./grid-column.component.scss'],
  encapsulation: ViewEncapsulation.None,

  providers: [DomService, GridColumnConfig]
})
export class GridColumnComponent extends WidgetComponent implements OnChanges,
  OnInit,
  DoCheck,
  AfterContentInit, AfterContentChecked,
  AfterViewInit, AfterViewChecked,
  OnDestroy {

  @Input() span: number;
  @Input() offset: number;

  @HostBinding('class.v-grid-column') gridColumnClass = 'true';
  parentRow: GridRowComponent;

  init() {
    if (isNullOrUndefined(this.span)) {
      this.span = this.config.span;
    }
    if (isNullOrUndefined(this.offset)) {
      this.offset = this.config.offset;
    }
  }

  setParentRow(row: GridRowComponent) {
    this.parentRow = row;
  }

  setWidthStyle() {
    const amount = this.parentRow.amount;
    const gutter = this.parentRow.gutter;
    const span = this.span;

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


  constructor(elementRef: ElementRef, domService: DomService, private config: GridColumnConfig, public render: Renderer2) {
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
