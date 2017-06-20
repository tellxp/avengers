import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  ElementRef, Input,
  OnChanges,
  OnDestroy,
  OnInit, ViewEncapsulation
} from '@angular/core';
import {Dom} from '../core/dom';
import {Widget} from '../core/widget';


@Component({
  selector: 'ave-routebar-item',
  templateUrl: './routebar-item.component.html',
  styleUrls: ['./routebar-item.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class RoutebarItemComponent extends Widget implements OnChanges,
  OnInit,
  DoCheck,
  AfterContentInit, AfterContentChecked,
  AfterViewInit, AfterViewChecked,
  OnDestroy {

  @Input() title;

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
