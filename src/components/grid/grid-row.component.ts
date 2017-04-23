import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  ContentChildren,
  DoCheck,
  ElementRef,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  QueryList
} from '@angular/core';
import {DomService} from '../core/dom.service';
import {WidgetComponent} from '../core/widget.component';
import {GridColumnComponent} from './grid-column.component';
import {GridRowConfig} from './grid-row.config';


@Component({
  selector: 'ave-grid-row',
  templateUrl: './grid-row.component.html',
  styleUrls: ['./grid-row.component.scss'],
  providers: [DomService, GridRowConfig]
})
export class GridRowComponent extends WidgetComponent implements OnChanges,
  OnInit,
  DoCheck,
  AfterContentInit, AfterContentChecked,
  AfterViewInit, AfterViewChecked,
  OnDestroy {

  @Input() gutter: number;
  @Input() amount: number;

  @ContentChildren(GridColumnComponent) contentColumn: QueryList<GridColumnComponent>;

  columns: GridColumnComponent[];

  constructor(elementRef: ElementRef, domService: DomService, private config: GridRowConfig) {
    super(elementRef, domService);
  }

  init() {
    this.gutter = this.getValidValue(this.gutter, this.config.gutter);
    this.amount = this.getValidValue(this.amount, this.config.amount);
  }

  loadColumns() {
    this.columns = this.contentColumn.toArray();
    const length = this.columns.length;
    for (let i = 0; i < length; i++) {
      this.columns[i].setParentRow(this);
      this.columns[i].setWidthStyle();
      this.columns[i].setPaddingStyle();
      this.columns[i].setMarginStyle();
    }
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

    this.loadColumns();
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
