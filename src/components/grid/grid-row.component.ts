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
  QueryList,
  Renderer2
} from '@angular/core';
import {DomService, ElementStyle} from '../widget/dom.service';
import {WidgetComponent} from '../widget/widget.component';
import {GridColumnComponent} from './grid-column.component';
import {isNullOrUndefined} from 'util';


@Component({
  selector: 'ave-grid-row',
  templateUrl: './grid-row.component.html',
  styleUrls: ['./grid-row.component.scss'],
  providers: [DomService]
})
export class GridRowComponent extends WidgetComponent implements OnChanges,
  OnInit,
  DoCheck,
  AfterContentInit, AfterContentChecked,
  AfterViewInit, AfterViewChecked,
  OnDestroy {

  @Input() gutter: number;
  @Input() amount: number;
  @Input() height: string;

  @ContentChildren(GridColumnComponent) contentColumn: QueryList<GridColumnComponent>;
  columns: GridColumnComponent[];

  constructor(elementRef: ElementRef, domService: DomService, private render: Renderer2) {
    super(elementRef, domService);
  }

  init() {
    if (isNullOrUndefined(this.gutter)) {
      this.gutter = 1;
    }
    if (isNullOrUndefined(this.amount)) {
      this.amount = 1;
    }

    if (isNullOrUndefined(this.height)) {
      this.height = 'auto';
    }
  }

  loadColumns() {
    this.columns = this.contentColumn.toArray();
    const length = this.columns.length;
    for (let i = 0; i < length; i++) {
      this.columns[i].setParentRow(this);
      this.columns[i].setWidth();
      this.columns[i].setHeight();
      this.columns[i].setMargin();
    }
    this.setHeight();
  }

  setHeight() {
    this.render.setStyle(this.elementRef.nativeElement, 'height', this.height);
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
