import {Component, Input, Output, EventEmitter, OnInit, AfterContentInit} from "@angular/core";
import {TabstripBar} from "./tabstrip-bar.component";
import {TabstripPage} from "./tabstrip-page.component";
import {isNullOrUndefined} from "util";
import {TabstripPanel} from "./tabstrip-panel.component";
@Component({
  selector: 'ave-tabstrip-tab',
  templateUrl: './tabstrip-tab.component.html',
  styleUrls: ['./tabstrip-tab.component.scss']
})
export class TabstripTab implements OnInit, AfterContentInit {

  private pairedPanel: TabstripPanel;

  private page: TabstripPage;

  @Input() private active: boolean;

  private parentBar: TabstripBar;

  ngOnInit() {

  }

  ngAfterContentInit() {
  }

  constructor() {
  }

  public setParent(bar: TabstripBar) {
    this.parentBar = bar;
  }

  public setPairPanel(panel: TabstripPanel) {
    this.pairedPanel = panel;
  }

  public setPairedPage(page: TabstripPage) {
    this.page = page;
  }

  public isActive(): boolean {
    if (this.active) {
      return true;
    } else {
      return false;
    }
  }

  public deactivate() {
    this.active = false;
    this.parentBar.setActiveTab(null);
  }

  public activate() {
    this.active = true;
    this.parentBar.setActiveTab(this);
  }

  private showPage() {
    this.pairedPanel.expand();
  }

  onClick() {
    let currentActiveTab: TabstripTab = this.parentBar.getActiveTab();
    if (isNullOrUndefined(currentActiveTab)) {
      this.activate();
    } else {
      currentActiveTab.deactivate();
      this.activate();
    }
    this.showPage();
  }
}
