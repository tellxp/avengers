import {Component, OnInit, ContentChildren, QueryList, AfterContentInit} from '@angular/core';
import {MenuEntryComponent} from './menu-entry.component';
import {MenuComponent} from './menu.component';

@Component({
  selector: 'ave-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.scss']
})
export class MenuBarComponent implements OnInit, AfterContentInit {
  @ContentChildren(MenuEntryComponent) contentEntries: QueryList<MenuEntryComponent>

  parentMenu: MenuComponent;
  entries: MenuEntryComponent[];
  constructor() {
  }

  ngOnInit() {
  }
  ngAfterContentInit() {
    this.entries = this.contentEntries.toArray();
  }
  setParentMenu(menu: MenuComponent) {
    this.parentMenu = menu;
  }
}
