import {Component, OnInit, Input, AfterContentInit} from '@angular/core';
import {TabstripPanel} from "./tabstrip-panel.component";
import {TabstripTab} from "./tabstrip-tab.component";

@Component({
  selector: 'ave-tabstrip-page',
  templateUrl: './tabstrip-page.component.html'
})
export class TabstripPage implements OnInit, AfterContentInit {

  @Input() private attachedTab: TabstripTab;

  private parentPanel: TabstripPanel;

  constructor() {
  }

  ngOnInit() {
  }

  ngAfterContentInit() {
    this.attchPageToTab();
  }

  private attchPageToTab() {
    this.attachedTab.setPage(this);
  }

  public setParent(panel: TabstripPanel) {
    this.parentPanel = panel;
  }
}
