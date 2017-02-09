import {
  Component, OnInit, Input, ContentChildren, QueryList, AfterContentInit, ContentChild,
  HostBinding
} from '@angular/core';
import {TabstripTab} from "./tabstrip-tab.component";
import {isNullOrUndefined} from "util";
import {TabstripToggle} from "./tabstrip-toggle.component";
import {Tabstrip} from "./tabstrip.component";
import has = Reflect.has;

@Component({
  selector: 'ave-tabstrip-bar',
  templateUrl: './tabstrip-bar.component.html',
  styleUrls: ['./tabstrip-bar.component.scss']
})
export class TabstripBar implements OnInit, AfterContentInit {

  activeTab: TabstripTab;

  @ContentChildren(TabstripTab) contentTabs: QueryList<TabstripTab>;
  @ContentChild(TabstripToggle) contentToggle: TabstripToggle;

  tabs: TabstripTab[];
  toggle: TabstripToggle;
  parentTabstrip: Tabstrip;
  constructor() {
  }

  ngOnInit() {
  }

  ngAfterContentInit() {
    this.initTabs();
    this.initToggle();
  }

  initTabs() {
    let hasActiveTab: boolean = false;
    this.tabs = this.contentTabs.toArray();
    if (!isNullOrUndefined(this.tabs)) {
      for (let i = 0; i < this.tabs.length; i ++) {
        this.tabs[i].parentBar = this;
        hasActiveTab = this.tabs[i].active || hasActiveTab;
        if (this.tabs[i].active) {
          this.activeTab = this.tabs[i];
        }
      }
      if (!hasActiveTab) {
        this.tabs[0].active = true;
        this.activeTab = this.tabs[0];
      }
    }
  }

  initToggle() {
    this.toggle = this.contentToggle;
    this.toggle.parentBar = this;
  }

  hasTab(): boolean {
    return !isNullOrUndefined(this.tabs);
  }

  hasTabAndPanel(): boolean {
    let value: boolean = false;
    if (this.hasTab()) {
      for (let i = 0; i < this.tabs.length; i++) {
        value = value || !isNullOrUndefined(this.tabs[i].page);
      }
      return value;
    } else {
      return false;
    }
  }
}
