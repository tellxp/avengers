import {
  Component, ElementRef, AfterViewChecked, HostBinding, OnChanges, OnInit, DoCheck, AfterContentInit,
  AfterViewInit, OnDestroy, AfterContentChecked, Input
} from '@angular/core';
import {DomService} from '../core/dom.service';
import {WidgetComponent} from '../core/widget.component';

@Component({
  selector: 'ave-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  providers: [DomService]
})
export class ButtonComponent extends WidgetComponent implements OnChanges,
  OnInit,
  DoCheck,
  AfterContentInit, AfterContentChecked,
  AfterViewInit, AfterViewChecked,
  OnDestroy {

  @Input() value;
  @HostBinding('attr.tabindex') tabIndex = '-1';
  @HostBinding('class.v-control') controlClass = true;
  @HostBinding('class.v-btn') btnClass = true;

  constructor(elementRef: ElementRef, domService: DomService) {
    super(elementRef, domService);
  }

  ngOnChanges() {
    super.ngOnChanges();
    this.value = 'ngOnChanges';
    // console.log(this.value);
  }

  ngOnInit() {
    super.ngOnInit();
    this.value = 'ngOnInit';
    // console.log(this.value);

  }

  ngDoCheck() {
    super.ngDoCheck();
    this.value = 'ngDoCheck';
    // console.log(this.value);

  }

  ngAfterContentInit() {
    super.ngAfterContentInit();
    this.value = 'ngAfterContentInit';
    // console.log(this.value);

  }

  ngAfterContentChecked() {
    super.ngAfterContentChecked();
    this.value = 'ngAfterContentChecked';
    // console.log(this.value);

  }

  ngAfterViewInit() {
    super.ngAfterViewInit();
    this.value = 'ngAfterViewInit';
    // console.log(this.value);

  }

  ngAfterViewChecked() {
    super.ngAfterViewChecked();
    this.value = 'ngAfterViewChecked';
    // console.log(this.value);
  }

  ngOnDestroy() {
    super.ngOnDestroy();
    this.value = 'ngOnDestroy';
    // console.log(this.value);

  }
}
