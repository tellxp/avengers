import {
  Component, OnInit, ContentChildren, QueryList, AfterContentInit, OnChanges, DoCheck, AfterContentChecked,
  AfterViewInit, AfterViewChecked, OnDestroy, ElementRef, ViewEncapsulation
} from '@angular/core';
import {MenuEntryComponent} from './menu-entry.component';
import {MenuComponent} from './menu.component';
import {WidgetComponent} from '../core/widget.component';
import {DomService} from '../core/dom.service';

@Component({
  selector: 'ave-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [DomService]

})
export class MenuBarComponent extends WidgetComponent implements OnChanges,
  OnInit,
  DoCheck,
  AfterContentInit, AfterContentChecked,
  AfterViewInit, AfterViewChecked,
  OnDestroy {

  @ContentChildren(MenuEntryComponent) contentEntries: QueryList<MenuEntryComponent>

  parentMenu: MenuComponent;
  entries: MenuEntryComponent[];
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

    this.init();
  }

  ngAfterContentChecked() {
    super.ngAfterContentChecked();
  }

  ngAfterViewInit() {
    super.ngAfterViewInit();
  }

  ngAfterViewChecked() {
    super.ngAfterViewInit();
  }

  ngOnDestroy() {
    super.ngOnDestroy();
  }

  init() {
    this.entries = this.contentEntries.toArray();
  }
  setParentMenu(menu: MenuComponent) {
    this.parentMenu = menu;
  }
}
