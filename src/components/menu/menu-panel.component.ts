import {
  Component, OnInit, Input, AfterContentInit, AfterViewChecked, ElementRef, Renderer,
  AfterViewInit, OnDestroy
} from '@angular/core';
import {MenuItem} from "./menu-item.component";
import {MenuEntry} from "./menu-entry.component";
import {Menu} from "./menu.component";
import {DomService, ElementPosition, ElementStyle} from "../common/dom.service";
import {isNullOrUndefined} from "util";

@Component({
  selector: 'ave-menu-panel',
  templateUrl: './menu-panel.component.html',
  styleUrls: ['./menu-panel.component.scss'],
  providers: [DomService]
})
export class MenuPanel implements OnInit,AfterViewInit, OnDestroy {
  parentMenu: Menu;
  parentItem: MenuItem;
  parentEntry: MenuEntry;
  element: ElementRef;
  domService: DomService;

  constructor(el: ElementRef, dom: DomService) {
    this.element = el;
    this.domService = dom;
    this.domService.loadElement(this.element);
  }


  setParentItem(item: MenuItem) {
    this.parentItem = item;
  }

  setParentEntry(entry: MenuEntry) {
    this.parentEntry = entry;
  }
  setParentMenu(menu: Menu) {
    this.parentMenu = menu;
  }
  ngOnInit() {
  }
  ngAfterViewInit() {

  }
  ngOnDestroy() {

  }
}
