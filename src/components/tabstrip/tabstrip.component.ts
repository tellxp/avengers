import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  ContentChildren,
  DoCheck,
  ElementRef,
  HostBinding,
  HostListener,
  OnChanges,
  OnDestroy,
  OnInit,
  QueryList, ViewChildren,
  ViewEncapsulation
} from '@angular/core';
import {Widget} from '../core/widget';
import {Dom} from '../core/dom';
import {TabstripPageComponent} from './tabstrip-page.component';
import {TabstripTabComponent} from './tabstrip-tab.component';


@Component({
  selector: 'ave-tabstrip',
  templateUrl: './tabstrip.component.html',
  styleUrls: ['./tabstrip.component.scss'],
  encapsulation: ViewEncapsulation.None,

})
export class TabstripComponent extends Widget implements OnChanges,
  OnInit,
  DoCheck,
  AfterContentInit, AfterContentChecked,
  AfterViewInit, AfterViewChecked,
  OnDestroy {

  @ContentChildren(TabstripPageComponent) contentPages: QueryList<TabstripPageComponent>;

  @ViewChildren(TabstripTabComponent) viewTabs: QueryList<TabstripTabComponent>;

  @HostBinding('attr.tabindex') '-1';
  @HostBinding('class.v-tabstrip') 'true';

  public pages: TabstripPageComponent[];
  public tabs: TabstripTabComponent[];
  public activePage: TabstripPageComponent;

  @HostListener('blur') onBlur() {

  }

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
    this.loadPages();
    if (!this.hasActivePage()) {
      this.setDefaultActivePage();
    } else {
      this.setCustomActivePage();
    }
  }

  ngAfterContentChecked() {
    super.ngAfterContentChecked();
  }

  ngAfterViewInit() {
    super.ngAfterViewInit();
    this.loadTabs();
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
  loadTabs() {
    this.tabs = this.viewTabs.toArray();
  }
  hasActivePage(): boolean {
    let hasActivePage = false;
    const length = this.pages.length;
    for (let i = 0; i < length; i++) {
      if (hasActivePage) {
        if (this.pages[i].active) {
          throw Error('too many active pages');
        }
      }
      hasActivePage = hasActivePage || this.pages[i].active;

    }
    if (hasActivePage) {
      return true;
    } else {
      return false;
    }
  }
  setCustomActivePage() {
    const length = this.pages.length;
    for (let i = 0; i < length; i++) {
      if (this.pages[i].active) {
        this.activePage = this.pages[i];
      }
    }
  }
  setDefaultActivePage() {
    if (this.pages.length > 0) {
      this.pages[0].active = true;
      this.activePage = this.pages[0];
    }
  }

  activatePage(page: TabstripPageComponent) {
    this.activePage.active = false;
    page.active = true;
    this.activePage = page;
  }
}

