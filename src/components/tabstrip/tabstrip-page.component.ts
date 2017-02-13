import {Component, OnInit, Input, AfterContentInit} from '@angular/core';
import {TabstripPanel} from "./tabstrip-panel.component";
import {TabstripTab} from "./tabstrip-tab.component";

@Component({
  selector: 'ave-tabstrip-page',
  templateUrl: './tabstrip-page.component.html'
})
export class TabstripPage implements OnInit, AfterContentInit {

  private parentTab: TabstripTab;

  private parentPanel: TabstripPanel;

  constructor() {
  }

  ngOnInit() {
  }

  ngAfterContentInit() {
  }

  public setParentTab(tab: TabstripTab) {
    this.parentTab = tab;
  }

  public setParentPanel(panel: TabstripPanel) {
    this.parentPanel = panel;
  }
}
