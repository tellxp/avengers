import {Component, Input, Output, EventEmitter, OnInit, AfterContentInit} from "@angular/core";
import {TabstripBar} from "./tabstrip-bar.component";
import {TabstripPage} from "./tabstrip-page.component";
import {isNullOrUndefined} from "util";
@Component({
  selector: 'ave-tabstrip-tab',
  templateUrl: './tabstrip-tab.component.html',
  styleUrls: ['./tabstrip-tab.component.scss']
})
export class TabstripTab implements OnInit, AfterContentInit {


  @Input() page?: TabstripPage;

  @Input() active: boolean;

  parentBar: TabstripBar;

  ngOnInit() {

  }

  ngAfterContentInit() {

  }

  constructor() {
  }

  deactivateTab(tab: TabstripTab) {
    tab.active = false;
    tab.parentBar.activeTab = null;
  }

  activateTab(tab: TabstripTab) {
    if (isNullOrUndefined(tab.parentBar.activeTab)) {
      this.active = true;
      this.parentBar.activeTab = this;
    }
  }

  deactivatePage(page: TabstripPage) {
    page.active = false;
    page.parentPanel.activePage = null;
  }

  activatePage(page: TabstripPage) {
    if (isNullOrUndefined(page.parentPanel.activePage)) {
      page.active = true;
      page.parentPanel.activePage = page;
    }
  }
  expandPanel() {
    let parentTabstrip = this.parentBar.parentTabstrip;
    let panel = parentTabstrip.panel;
    if (!panel.expanded) {
      this.parentBar.parentTabstrip.panel.expand();
    }
  }
  onTabClick() {
    this.expandPanel();
    let currentActiveTab: TabstripTab = this.parentBar.activeTab;
    if (isNullOrUndefined(currentActiveTab)) {
      this.activateTab(this);
      this.activatePage(this.page);
    } else {
      this.deactivateTab(currentActiveTab);
      let currentActivePage: TabstripPage = currentActiveTab.page;
      this.deactivatePage(currentActivePage);
      this.activateTab(this);
      this.activatePage(this.page);
    }
  }
}
