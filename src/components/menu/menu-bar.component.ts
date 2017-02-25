import {Component, OnInit, ContentChildren, QueryList, AfterContentInit} from '@angular/core';
import {MenuEntry} from "./menu-entry.component";
import {Menu} from "./menu.component";

@Component({
  selector: 'ave-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.scss']
})
export class MenuBar implements OnInit, AfterContentInit {
  @ContentChildren(MenuEntry) contentEntries: QueryList<MenuEntry>

  parentMenu: Menu;
  entries: MenuEntry[];
  constructor() {
  }

  ngOnInit() {
  }
  ngAfterContentInit() {
    this.entries = this.contentEntries.toArray();
  }
  setParentMenu(menu: Menu) {
    this.parentMenu = menu;
  }
}
