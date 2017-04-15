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
  OnInit,
  Renderer2
} from "@angular/core";
import {DomService} from "../widget/dom.service";
import {WidgetComponent} from "../widget/widget.component";
import {GridRowComponent} from "./grid-row.component";
import {isNullOrUndefined} from "util";


@Component({
  selector: 'ave-grid-column',
  templateUrl: './grid-column.component.html',
  styleUrls: ['./grid-column.component.scss'],
  providers: [DomService]
})
export class GridColumnComponent extends WidgetComponent implements OnChanges,
  OnInit,
  DoCheck,
  AfterContentInit, AfterContentChecked,
  AfterViewInit, AfterViewChecked,
  OnDestroy {

  @Input() span: number;

  parentRow: GridRowComponent;

  init() {
    if (isNullOrUndefined(this.span)) {
      this.span = 1;
    }
  }

  setParentRow(row: GridRowComponent) {
    this.parentRow = row;
  }

  calculateWidth(amount: number, gutter: number, span: number): number {

    const value = 100 / amount * span - gutter;
    if (span === 4) {
      console.log(amount, gutter, value);
    }

    return value;
  }

  setWidth() {
    const amount = this.parentRow.amount;
    const gutter = this.parentRow.gutter;
    const span = this.span;

    const width = this.calculateWidth(amount, gutter, span);

    this.render.setStyle(this.elementRef.nativeElement, 'width', width + '%');
  }

  setHeight() {
    const height = this.parentRow.height;

    this.render.setStyle(this.elementRef.nativeElement, 'height', height);
  }

  setPadding() {
    const padding = this.parentRow.gutter / 2;
    this.render.setStyle(this.elementRef.nativeElement, 'padding-left', padding + '%');
    this.render.setStyle(this.elementRef.nativeElement, 'padding-right', padding + '%');
  }


  constructor(elementRef: ElementRef, domService: DomService, public render: Renderer2) {
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
