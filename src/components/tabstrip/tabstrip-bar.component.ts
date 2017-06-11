import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  ContentChild,
  ContentChildren,
  DoCheck,
  ElementRef,
  HostBinding,
  OnChanges,
  OnDestroy,
  OnInit,
  QueryList,
  ViewEncapsulation
} from '@angular/core';
import {TabstripTabComponent} from './tabstrip-tab.component';
import {isNullOrUndefined} from 'util';
import {TabstripToggleComponent} from './tabstrip-toggle.component';
import {TabstripComponent} from './tabstrip.component';
import {TabstripPanelComponent} from './tabstrip-panel.component';
import {WidgetComponent} from '../core/widget.component';
import {DomService} from '../core/dom.service';

@Component({
  selector: 'ave-tabstrip-bar',
  templateUrl: './tabstrip-bar.component.html',
  styleUrls: ['./tabstrip-bar.component.scss'],
  encapsulation: ViewEncapsulation.None,

  providers: [DomService]
})
export class TabstripBarComponent extends WidgetComponent implements OnChanges,
  OnInit,
  DoCheck,
  AfterContentInit, AfterContentChecked,
  AfterViewInit, AfterViewChecked,
  OnDestroy {

  @HostBinding('class.v-tabstrip-bar') 'true';

  @ContentChildren(TabstripTabComponent) private contentTabs: QueryList<TabstripTabComponent>;

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


}
