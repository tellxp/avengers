import {
  Component, OnInit, Input, AfterContentInit, trigger, transition, style, animate,
  ElementRef, DoCheck, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy, OnChanges, ViewEncapsulation, HostBinding
} from '@angular/core';
import {TabstripPanelComponent} from './tabstrip-panel.component';
import {TabstripTabComponent} from './tabstrip-tab.component';
import {Widget} from '../core/widget';
import {Dom} from '../core/dom';

@Component({
  selector: 'ave-tabstrip-page',
  templateUrl: './tabstrip-page.component.html',
  styleUrls: ['./tabstrip-page.component.scss'],
  encapsulation: ViewEncapsulation.None,

})
export class TabstripPageComponent extends Widget implements OnChanges,
  OnInit,
  DoCheck,
  AfterContentInit, AfterContentChecked,
  AfterViewInit, AfterViewChecked,
  OnDestroy {

  @Input() title: string;
  @Input() active: boolean;
  @HostBinding('class.v-tabstrip-page') 'true';

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
