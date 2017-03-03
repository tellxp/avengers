import {Component, OnInit, AfterContentInit, ContentChildren, QueryList, AfterViewInit} from "@angular/core";
import {MenuBar} from "./menu-bar.component";

@Component({
  selector: 'ave-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class Menu implements OnInit, AfterContentInit, AfterViewInit {
  @ContentChildren(MenuBar) contentBars: QueryList<MenuBar>;
  bars: MenuBar[];

  constructor() {
  }

  ngOnInit() {
  }

  ngAfterContentInit() {
    this.initBars();
  }

  ngAfterViewInit() {
    console.log();
  }

  initBars() {
    this.bars = this.contentBars.toArray();
    let length = this.bars.length;
    for (let i = 0; i < length; i++) {
      this.bars[i].setParentMenu(this);
    }
  }
}
