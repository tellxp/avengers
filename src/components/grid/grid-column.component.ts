import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component, ContentChildren,
  DoCheck,
  ElementRef,
  Input,
  OnChanges,
  OnDestroy,
  OnInit, QueryList,
  Renderer2
} from '@angular/core';
import {DomService} from '../core/dom.service';
import {WidgetComponent} from '../core/widget.component';
import {GridRowComponent} from './grid-row.component';
import {isNullOrUndefined} from 'util';
import {GridColumnConfig} from './grid-column.config';


@Component({
  selector: 'ave-grid-column',
  templateUrl: './grid-column.component.html',
  styleUrls: ['./grid-column.component.scss'],
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

  parentRow: GridRowComponent;



  calculateColumnWidth(amount: number, gutter: number, span: number): number {

    if (this.isValidGutter(amount, gutter)) {
      return 100 / amount * span - gutter;
    } else {
      throw Error('gutter is not valid!');
    }
  }

  isValidGutter(amount: number, gutter: number): boolean {
    if (100 / amount < gutter) {
      throw Error('gutter must be smaller than 100 / amount! '
        + 'But now, 100 / amount - gutter is: ' + (100 / amount - gutter));
    } else {
      return false;
    }
  }
  calculateColumnOffset(amount: number, gutter: number, offset: number) {
    if (this.isValidGutter(amount, gutter)) {
      return 100 / amount * offset;
    } else {
      throw Error('gutter is not valid!');
    }
  }
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

  setWidth() {
    const amount = this.parentRow.amount;
    const gutter = this.parentRow.gutter;
    const span = this.span;

    const width = this.calculateColumnWidth(amount, gutter, span);

    this.render.setStyle(this.elementRef.nativeElement, 'width', width + '%');
  }

  setGutter() {
    const gutter = this.parentRow.gutter;

    const padding = gutter / 2;

    this.render.setStyle(this.elementRef.nativeElement, 'padding-left', padding + '%');
    this.render.setStyle(this.elementRef.nativeElement, 'padding-right', padding + '%');
  }

  setOffset() {

    const amount = this.parentRow.amount;
    const gutter = this.parentRow.gutter;
    const offset = this.offset;

    const offsetMargin = this.calculateColumnOffset(amount, gutter, offset);

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
