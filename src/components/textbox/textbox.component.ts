import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  ElementRef,
  forwardRef,
  HostBinding,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Renderer2
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
  @Input() placeholder: string;
  updateModelOnChange: Function = () => void {};
  updateModelOnTouched: Function = () => void {};

  @HostBinding('attr.tabindex') '-1';

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

  setBlurStyle() {
    this.render.setStyle(this.elementRef.nativeElement, 'border-color', 'rgba(0,0,0,.4)');
    this.render.setStyle(this.elementRef.nativeElement, 'outline', 'none');
  }

  setFocusStyle() {
    this.render.setStyle(this.elementRef.nativeElement, 'border-color', 'rgb(0, 120, 215)');
    this.render.setStyle(this.elementRef.nativeElement, 'outline', 'auto');
    this.render.setStyle(this.elementRef.nativeElement, 'outline-color', 'rgb(77, 144, 254)');
    this.render.setStyle(this.elementRef.nativeElement, 'outline-width', '5px');
    this.render.setStyle(this.elementRef.nativeElement, 'outline-offset', '-2px');
  }

  onFocus() {
    this.setFocusStyle();
  }

  onBlur() {
    this.setBlurStyle();
  }

  update(value: string) {
    this.value = value;
    this.updateModelOnChange(this.value);
    this.updateModelOnTouched(this.value);
  }

  writeValue(value: any): void {
    this.value = value;
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
export enum TextboxType {
  Text,
  Number,
  Seearch,
  Email,
  Url,
  Tel
}
