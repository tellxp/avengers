import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  ElementRef, forwardRef, HostBinding,
  Input,
  OnChanges,
  OnDestroy,
  OnInit
} from '@angular/core';
import {DomService} from '../common/dom.service';
import {WidgetComponent} from '../common/widget.component';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';

export const TEXTBOX_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => TextboxComponent),
  multi: true
};

@Component({
  selector: 'ave-textbox',
  templateUrl: './textbox.component.html',
  styleUrls: ['./textbox.component.scss'],
  providers: [DomService, TEXTBOX_VALUE_ACCESSOR]
})

export class TextboxComponent extends WidgetComponent implements OnChanges,
  OnInit,
  DoCheck,
  AfterContentInit, AfterContentChecked,
  AfterViewInit, AfterViewChecked,
  OnDestroy, ControlValueAccessor {

  @Input() type: TextboxType;
  @Input() value: string;

  @HostBinding('attr.tabindex') '-1';


  constructor(elementRef: ElementRef, domService: DomService) {
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
  update(value: string) {
    this.value = value;
    this.updateModelOnChange(this.value);
  }
  writeValue(value: any): void {
    this.value = value;
  }

  registerOnChange(fn: Function): void {
    this.updateModelOnChange = fn;
  }
  updateModelOnChange: Function = () => {};
  updateModelOnTouched: Function = () => {};

  registerOnTouched(fn: Function): void {
    this.updateModelOnTouched = fn;
  }

  setDisabledState(val: boolean): void {
  }

}
export enum TextboxType {
  Text,
  Number,
  Seearch,
  Email,
  Url,
  Tel
}
