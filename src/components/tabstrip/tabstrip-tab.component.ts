import {Component, Input, Output, EventEmitter, OnInit, AfterContentInit} from '@angular/core';
import {TabstripBarComponent} from './tabstrip-bar.component';
import {TabstripPageComponent} from './tabstrip-page.component';
import {isNullOrUndefined} from 'util';
import {TabstripPanelComponent} from './tabstrip-panel.component';
@Component({
  selector: 'ave-tabstrip-tab',
  templateUrl: './tabstrip-tab.component.html',
  styleUrls: ['./tabstrip-tab.component.scss']
})
export class TabstripTabComponent implements OnInit, AfterContentInit {

  private pairedPanel: TabstripPanelComponent;

  @Input() private page: TabstripPageComponent;

  @Input() private active: boolean;

  private parentBar: TabstripBarComponent;

  ngOnInit() {

  }

  ngAfterContentInit() {
    this.setPage();
  }

  constructor() {
  }

  public setParent(bar: TabstripBarComponent) {
    this.parentBar = bar;
  }

  public setPairPanel(panel: TabstripPanelComponent) {
    this.pairedPanel = panel;
  }

  public setPage() {
    this.page.setParentTab(this);
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
    let currentActiveTab: TabstripTabComponent = this.parentBar.getActiveTab();
    if (isNullOrUndefined(currentActiveTab)) {
      this.activate();
    } else {
      currentActiveTab.deactivate();
      this.activate();
    }
    this.showPage();
  }
}
