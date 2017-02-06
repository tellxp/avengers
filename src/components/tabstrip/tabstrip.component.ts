import {
  Component,
  Input, OnInit, AfterContentInit, ContentChildren, QueryList, ContentChild,
} from '@angular/core';

import {TabstripTab} from "./tabstrip-tab.component";
import {isNullOrUndefined} from "util";
import {TabstripBar} from "./tabstrip-bar.component";
import {TabstripPanel} from "./tabstrip-panel.component";
import {TabstripPage} from "./tabstrip-page.component";
import {TabstripToggle} from "./tabstrip-toggle.component";


@Component({
  selector: 'ave-tabstrip',
  templateUrl: './tabstrip.component.html',
  styleUrls: ['./tabstrip.component.scss']
})
export class Tabstrip implements OnInit, AfterContentInit {

  @ContentChild(TabstripBar) contentBar: TabstripBar;
  @ContentChild(TabstripPanel) contentPanel: TabstripPanel;

  bar:TabstripBar;
  panel:TabstripPanel;
  toggle: TabstripToggle;


  ngOnInit() {

  }

  ngAfterContentInit() {
    this.initBar();
    this.initPanel();
  }

  constructor() {

  }

  initBar() {
    this.bar = this.contentBar;
    this.bar.parentTabstrip = this;
  }
  initPanel() {
    this.panel = this.contentPanel;
    this.panel.parentTabstrip = this;
  }

  findTabById(id: string): TabstripTab {
    for (let tab of this.bar.tabs) {
      if (tab.uid == id) {
        return tab;
      }
    }
  }
}

