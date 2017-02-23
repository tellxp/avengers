import {Component, OnInit, AfterContentInit, ContentChildren, QueryList} from '@angular/core';
import {MenuEntry} from "./menu-entry.component";
import {MenuBar} from "./menu-bar.component";
import {MenuPanel} from "./menu-panel.component";

@Component({
  selector: 'ave-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class Menu implements OnInit, AfterContentInit {
  @ContentChildren(MenuBar) contentBars: QueryList<MenuBar>;
  @ContentChildren(MenuPanel) contentPanels: QueryList<MenuPanel>;
  bars: MenuBar[];
  panels: MenuPanel[];

  constructor() {
  }

  ngOnInit() {
  }

  ngAfterContentInit() {
    this.initBars();
    this.initPanels();
  }

  initBars() {
    this.bars = this.contentBars.toArray();
    let length = this.bars.length;
    for (let i = 0; i < length; i++) {
      this.bars[i].setParentMenu(this);
    }
  }
  initPanels() {
    this.panels = this.contentPanels.toArray();
    let length = this.panels.length;
    for (let i = 0; i < length; i++) {
      this.panels[i].setParentMenu(this);
    }
  }
}
