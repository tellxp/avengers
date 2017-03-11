import {Component, OnInit, AfterContentInit, ContentChildren, QueryList, AfterViewInit} from "@angular/core";
import {MenuBarComponent} from "./menu-bar.component";

@Component({
  selector: 'ave-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit, AfterContentInit, AfterViewInit {
  @ContentChildren(MenuBarComponent) contentBars: QueryList<MenuBarComponent>;
  bars: MenuBarComponent[];

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
