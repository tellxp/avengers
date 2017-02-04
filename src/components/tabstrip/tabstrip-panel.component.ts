import {Component, ContentChildren, QueryList, OnInit, AfterContentInit} from '@angular/core';
import { Input } from '@angular/core';
import {TabstripPage} from "./tabstrip-page.component";
import {isNullOrUndefined} from "util";
import {Tabstrip} from "./tabstrip.component";


@Component({
  selector: 'ave-tabstrip-panel',
  templateUrl: './tabstrip-panel.component.html',
  styleUrls: ['./tabstrip-panel.component.scss']
})
export class TabstripPanel implements OnInit, AfterContentInit {

  @Input() expanded: boolean;

  parentTabstrip: Tabstrip;

  @ContentChildren(TabstripPage) contentPages: QueryList<TabstripPage>;
  pages: TabstripPage[];
  activePage: TabstripPage;
  constructor() {
    this.expanded = false;
  }
  ngOnInit() {

  }
  ngAfterContentInit() {
    this.initPages();
  }
  initPages() {
    this.pages = this.contentPages.toArray();
    if (!isNullOrUndefined(this.pages)) {
      for (let i = 0; i < this.pages.length; i++) {
        this.pages[i].parentPanel = this;
      }
      if (!this.activePage) {
        this.activePage = this.pages[0];
      }
    }
  }
  expand() {
    this.expanded = true;
  }
  collapse() {
    this.expanded = false;
  }
}
