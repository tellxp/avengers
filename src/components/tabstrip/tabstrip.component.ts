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

  @ContentChild(TabstripBar) private contentBar: TabstripBar;
  @ContentChild(TabstripPanel) private contentPanel: TabstripPanel;

  private bar: TabstripBar;
  private panel: TabstripPanel;

  ngOnInit() {

  }

  ngAfterContentInit() {
    this.init();
  }

  constructor() {

  }

  private init() {
    this.setBar();
    this.setPanel();
  }

  private setBar() {
    this.bar = this.contentBar;
    this.bar.setParent(this);
  }

  private setPanel() {
    this.panel = this.contentPanel;
    this.panel.setParent(this);
  }

  private setDefaultTab() {

  }
  // findTabById(id: string): TabstripTab {
  //   for (let tab of this.bar.tabs) {
  //     if (tab.uid == id) {
  //       return tab;
  //     }
  //   }
  // }
}

