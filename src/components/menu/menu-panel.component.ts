import {Component, OnInit, Input, AfterContentInit} from '@angular/core';
import {MenuItem} from "./menu-item.component";
import {MenuEntry} from "./menu-entry.component";
import {PopupOrientation} from "../popup/popup.component";
import {Menu} from "./menu.component";

@Component({
  selector: 'ave-menu-panel',
  templateUrl: './menu-panel.component.html',
  styleUrls: ['./menu-panel.component.scss']
})
export class MenuPanel implements OnInit, AfterContentInit {
  parentMenu: Menu;
  parentItem: MenuItem;
  parentEntry: MenuEntry;
  parent: any;
  orientation: PopupOrientation;
  constructor() {
  }
  ngAfterContentInit() {
    console.log(this.parent);
  }
  setParentItem(item: MenuItem) {
    this.parentItem = item;
    this.parent = this.parentItem;
    this.orientation = PopupOrientation.Right;
  }

  setParentEntry(entry: MenuEntry) {
    this.parentEntry = entry;
    this.parent = this.parentEntry;
    this.orientation = PopupOrientation.Bottom;
  }
  setParentMenu(menu: Menu) {
    this.parentMenu = menu;
  }
  ngOnInit() {
  }
}
