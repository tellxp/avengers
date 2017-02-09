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
    if (!isNullOrUndefined(tab)) {
      tab.active = false;
      tab.parentBar.activeTab = null;
      this.deactivatePage(tab.page);
    }
  }

  activateTab(tab: TabstripTab) {
    if (isNullOrUndefined(tab.parentBar.activeTab)) {
      this.active = true;
      this.parentBar.activeTab = this;
      this.activatePage(tab.page);
    }
  }

  deactivatePage(page: TabstripPage) {
    if (!isNullOrUndefined(page)) {
      page.active = false;
    }
  }

  activatePage(page: TabstripPage) {
    if (!isNullOrUndefined(page)) {
      page.active = true;
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
    } else {
      this.deactivateTab(currentActiveTab);
      this.activateTab(this);
    }
  }
}
