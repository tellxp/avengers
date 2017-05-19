import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  ElementRef, forwardRef, HostListener,
  OnChanges,
  OnDestroy,
  OnInit, ViewEncapsulation
} from '@angular/core';
import {DomService} from '../core/dom.service';
import {WidgetComponent} from '../core/widget.component';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';

export const CHECKBOX_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => CheckboxComponent),
  multi: true
};

@Component({
  selector: 'ave-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [DomService, CHECKBOX_VALUE_ACCESSOR]
})
export class CheckboxComponent extends WidgetComponent implements OnChanges,
  OnInit,
  DoCheck,
  AfterContentInit, AfterContentChecked,
  AfterViewInit, AfterViewChecked,
  OnDestroy,
  ControlValueAccessor {


  checked: boolean;

  updateModelOnChange: Function = () => void {};
  updateModelOnTouched: Function = () => void {};

  init() {
    this.checked = false;
  }
  constructor(elementRef: ElementRef, domService: DomService) {
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

  update(value: any) {
    this.checked = value;
    this.updateModelOnChange(this.checked);
    this.updateModelOnTouched(this.checked);
  }

  writeValue(value: any): void {
    this.checked = value;
  }

  registerOnChange(fn: Function): void {
    this.updateModelOnChange = fn;
  }

  registerOnTouched(fn: Function): void {
    this.updateModelOnTouched = fn;
  }

  setDisabledState(val: boolean): void {
  }
}
