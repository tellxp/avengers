import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  ElementRef,
  HostBinding,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Renderer2,
  ViewEncapsulation
} from '@angular/core';
import {Widget} from '../core/widget';

@Component({
  selector: 'ave-button',
  templateUrl: 'button.component.html',
  styleUrls: ['button.component.scss'],
})
export class ButtonComponent extends Widget implements OnChanges,
  OnInit,
  DoCheck,
  AfterContentInit, AfterContentChecked,
  AfterViewInit, AfterViewChecked,
  OnDestroy {

  // @Input() value;

  // @HostBinding('attr.tabindex') '-1';
  // @HostBinding('class.v-button') 'true';


  // @Input('class.primary') set CssClass(val: boolean) {

  // }

  // constructor(elementRef: ElementRef, private render: Renderer2) {
  //   super(elementRef);
  // }


  // ngOnChanges() {
  //   super.ngOnChanges();
  //   this.value = 'ngOnChanges';
  //   // console.log(this.value);
  // }

  // ngOnInit() {
  //   super.ngOnInit();
  //   this.value = 'ngOnInit';

  //   // console.log(this.value);

  // }

  // ngDoCheck() {
  //   super.ngDoCheck();
  //   this.value = 'ngDoCheck';
  //   // console.log(this.value);

  // }

  // ngAfterContentInit() {
  //   super.ngAfterContentInit();
  //   this.value = 'ngAfterContentInit';
  //   // console.log(this.value);

  // }

  // ngAfterContentChecked() {
  //   super.ngAfterContentChecked();
  //   this.value = 'ngAfterContentChecked';
  //   // console.log(this.value);

  // }


  // ngAfterViewInit() {
  //   super.ngAfterViewInit();
  //   this.value = 'ngAfterViewInit';
  //   // console.log(this.value);

  // }

  // ngAfterViewChecked() {
  //   super.ngAfterViewChecked();
  //   this.value = 'ngAfterViewChecked';
  //   // console.log(this.value);
  // }

  // ngOnDestroy() {
  //   super.ngOnDestroy();
  //   this.value = 'ngOnDestroy';
  //   // console.log(this.value);
  // }
  ngOnInit() {
  }
}
