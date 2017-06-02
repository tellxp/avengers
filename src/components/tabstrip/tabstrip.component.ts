import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  ContentChild, ContentChildren,
  DoCheck,
  ElementRef,
  HostBinding,
  HostListener,
  OnChanges,
  OnDestroy,
  OnInit, QueryList, ViewEncapsulation
} from '@angular/core';
import {TabstripBarComponent} from './tabstrip-bar.component';
import {TabstripPanelComponent} from './tabstrip-panel.component';
import {WidgetComponent} from '../core/widget.component';
import {DomService} from '../core/dom.service';
import {TabstripPageComponent} from './tabstrip-page.component';


@Component({
  selector: 'ave-tabstrip',
  templateUrl: './tabstrip.component.html',
  styleUrls: ['./tabstrip.component.scss'],
  encapsulation: ViewEncapsulation.None,

  providers: [DomService]
})
export class TabstripComponent extends WidgetComponent implements OnChanges,
  OnInit,
  DoCheck,
  AfterContentInit, AfterContentChecked,
  AfterViewInit, AfterViewChecked,
  OnDestroy {

  @ContentChildren(TabstripPageComponent) contentPages: QueryList<TabstripPageComponent>;

  @HostBinding('attr.tabindex') tabIndex = '-1';
  @HostBinding('class.v-tabstrip') tabstripCssClass = 'true';
  @HostBinding('class.v-tabstrip-default') tabstripDefaultCssClass = 'true';

  public pages: TabstripPageComponent[];

  @HostListener('blur') onBlur() {

  }

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
    this.loadPages();
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

  loadPages() {
    this.pages = this.contentPages.toArray();
  }
}

