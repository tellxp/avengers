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

  calculateWidth(amount: number, gutter: number, span: number): number {

    if (100 / amount < gutter) {
      throw Error('gutter must be smaller than 100 / amount! '
        + 'But now, 100 / amount - gutter is: ' + (100 / amount - gutter));
    } else {
      const value = 100 / amount * span - gutter;
      return value;
    }
  }

  calculateOffset(amount: number, gutter: number, offset: number) {
    if (100 / amount < gutter) {
      throw Error('gutter must be smaller than 100 / amount! '
        + 'But now, 100 / amount - gutter is: ' + (100 / amount - gutter));
    } else {
      const value = 100 / amount * offset + gutter;
      return value;
    }
  }

  setWidth() {
    const amount = this.parentRow.amount;
    const gutter = this.parentRow.gutter;
    const span = this.span;

    const width = this.calculateWidth(amount, gutter, span);

    this.render.setStyle(this.elementRef.nativeElement, 'width', width + '%');
  }


  setMargin() {

    const amount = this.parentRow.amount;
    const gutter = this.parentRow.gutter;
    const offset = this.offset;

    const gutterMargin = this.parentRow.gutter / 2;
    const offsetMargin = this.calculateOffset(amount, gutter, offset);

    this.render.setStyle(this.elementRef.nativeElement, 'margin-left', gutterMargin + offsetMargin + '%');
    this.render.setStyle(this.elementRef.nativeElement, 'margin-right', gutterMargin + '%');
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
