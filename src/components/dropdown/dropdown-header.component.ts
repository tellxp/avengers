import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  ElementRef, HostBinding, HostListener, Input,
  OnChanges,
  OnDestroy,
  OnInit,
  ViewEncapsulation
} from '@angular/core';
import {Dom} from '../core/dom';
import {Widget, ElementPosition} from '../core/widget';


@Component({
  selector: 'ave-dropdown-header',
  templateUrl: './dropdown-header.component.html',
  styleUrls: ['./dropdown-header.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DropdownHeaderComponent extends Widget implements OnChanges,
  OnInit,
  DoCheck,
  AfterContentInit, AfterContentChecked,
  AfterViewInit, AfterViewChecked,
  OnDestroy {

  @Input() title: string;
  @HostBinding('class.v-dropdown-header') 'true';

  constructor(elementRef: ElementRef) {
    super(elementRef);
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
