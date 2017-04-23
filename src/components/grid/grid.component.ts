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
  OnInit, Renderer2
} from '@angular/core';
import {DomService} from '../core/dom.service';
import {WidgetComponent} from '../core/widget.component';
import {isNullOrUndefined} from "util";


@Component({
  selector: 'ave-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss'],
  providers: [DomService]
})
export class GridComponent extends WidgetComponent implements OnChanges,
  OnInit,
  DoCheck,
  AfterContentInit, AfterContentChecked,
  AfterViewInit, AfterViewChecked,
  OnDestroy {


  static isValidGutter(amount: number, gutter: number): boolean {
    if (100 / amount < gutter) {
      throw Error('gutter must be smaller than 100 / amount! '
        + 'but now, 100 / amount - gutter is: ' + (100 / amount - gutter));
    } else {
      return true;
    }
  }
  static calculateColumnWidth(amount: number, gutter: number, span: number): number {

    if (this.isValidGutter(amount, gutter)) {
      return 100 / amount * span - gutter;
    } else {
      throw Error('gutter is not valid!');
    }
  }
  static calculateColumnOffset(amount: number, gutter: number, offset: number) {
    if (this.isValidGutter(amount, gutter)) {
      return 100 / amount * offset;
    } else {
      throw Error('gutter is not valid!');
    }
  }
  constructor(elementRef: ElementRef, domService: DomService, private render: Renderer2) {
    super(elementRef, domService);
  }
  ngOnChanges() {
    super.ngOnChanges();
  }

  ngOnInit() {
    super.ngOnInit();

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
