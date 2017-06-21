import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  ContentChildren,
  DoCheck,
  ElementRef,
  HostBinding,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  QueryList,
  ViewEncapsulation
} from '@angular/core';
import {Widget} from '../core/widget';
import {GridColumnComponent} from './grid-column.component';
import {GridRowConfig} from './grid-row.config';


@Component({
  selector: 'ave-grid-row',
  templateUrl: './grid-row.component.html',
  styleUrls: ['./grid-row.component.scss'],
  encapsulation: ViewEncapsulation.None,

  providers: [GridRowConfig]
})
export class GridRowComponent extends Widget implements OnChanges,
  OnInit,
  DoCheck,
  AfterContentInit, AfterContentChecked,
  AfterViewInit, AfterViewChecked,
  OnDestroy {

  @Input() gutter: number;
  @Input() amount: number;

  @ContentChildren(GridColumnComponent) contentColumn: QueryList<GridColumnComponent>;

  @HostBinding('class.v-grid-row') gridRowClass = 'true';

  columns: GridColumnComponent[];

  constructor(elementRef: ElementRef, private config: GridRowConfig) {
    super(elementRef);
  }

  init() {
    this.gutter = Widget.getValidValue(this.gutter, this.config.gutter);
    this.amount = Widget.getValidValue(this.amount, this.config.amount);
  }

  loadColumns() {
    this.columns = this.contentColumn.toArray();
    const length = this.columns.length;
    const windowWidth = window.innerWidth;
    for (let i = 0; i < length; i++) {
      this.columns[i].setParentRow(this);
      this.columns[i].setStyleByWindowsWidth(windowWidth);
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
