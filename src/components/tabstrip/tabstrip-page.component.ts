import {Component, OnInit, Input, AfterContentInit} from '@angular/core';
import {TabstripPanel} from "./tabstrip-panel.component";
import {TabstripTab} from "./tabstrip-tab.component";

@Component({
  selector: 'ave-tabstrip-page',
  templateUrl: './tabstrip-page.component.html'
})
export class TabstripPage implements OnInit, AfterContentInit {

  @Input() private pairedTab: TabstripTab;

  private parentPanel: TabstripPanel;

  constructor() {
  }

  ngOnInit() {
  }

  ngAfterContentInit() {
    this.setPairedTab();
  }

  private setPairedTab() {
    this.pairedTab.setPairedPage(this);
  }

  public setParentPanel(panel: TabstripPanel) {
    this.parentPanel = panel;
  }
}
