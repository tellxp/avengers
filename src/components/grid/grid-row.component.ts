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
} from "@angular/core";
import {DomService, ElementStyle} from "../widget/dom.service";
import {WidgetComponent} from "../widget/widget.component";
import {GridColumnComponent} from "./grid-column.component";
import {isNullOrUndefined} from "util";


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
  @Input() height: number;

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
      this.amount = 24;
    }

    if (isNullOrUndefined(this.height)) {
      this.height = 32;
    }
  }

  loadColumns() {
    this.columns = this.contentColumn.toArray();
  }

  setColumnStyle() {
    const length = this.columns.length;
    const columnWidth = this.calculateColumnWidth();
    const columnMargin = this.calculateColumnMargin();
    for (let i = 0; i < length; i++) {
      const columnStyle: ElementStyle = new ElementStyle();
      columnStyle.height = this.height;
      columnStyle.width = columnWidth;
      this.render.setStyle(this.columns[i].elementRef.nativeElement, 'width', columnStyle.width + '%');
      this.render.setStyle(this.columns[i].elementRef.nativeElement, 'height', columnStyle.height + '%');
      this.render.setStyle(this.columns[i].elementRef.nativeElement, 'margin-left', columnMargin + '%');
      this.render.setStyle(this.columns[i].elementRef.nativeElement, 'margin-right', columnMargin + '%');
      console.log(columnWidth);
    }
  }

  calculateColumnMargin(): number {
    const value = this.gutter / 2;
    return value;
  }
  calculateColumnWidth(): number {

    const value = 100 / this.amount - this.gutter;
    return value;
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
    this.setColumnStyle();

  }

  ngAfterViewInit() {
    super.ngAfterViewInit();
  }

  ngAfterViewChecked() {
    super.ngAfterViewChecked();
    this.setColumnStyle();

  }

  ngOnDestroy() {
    super.ngOnDestroy();
  }

}
