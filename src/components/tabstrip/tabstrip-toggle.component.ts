import {Component, Input, Output, EventEmitter, OnInit, AfterContentInit} from '@angular/core';
import {TabstripBarComponent} from './tabstrip-bar.component';
import {TabstripPanelComponent} from './tabstrip-panel.component';


@Component({
  selector: 'ave-tabstrip-toggle',
  templateUrl: './tabstrip-toggle.component.html',
  styleUrls: ['./tabstrip-toggle.component.scss']
})
export class TabstripToggleComponent implements OnInit, AfterContentInit {


  private parentBar: TabstripBarComponent;

  private pairedPanel: TabstripPanelComponent;

  private expanded: boolean;

  ngOnInit() {

  }

  ngAfterContentInit() {
    this.expanded = false;
  }

  constructor() {
  }

  public setParent(bar: TabstripBarComponent) {
    this.parentBar = bar;
  }
  public setPairedPanel(panel: TabstripPanelComponent) {
    this.pairedPanel = panel;
  }
  private togglePanel() {
    this.expanded = this.pairedPanel.isExpanded();
    if (this.expanded) {
      this.pairedPanel.collapse();
      this.expanded = false;
    } else {
      this.pairedPanel.expand();
      this.expanded = true;
    }
  }

  onToggleClick() {
    this.togglePanel();
  }
}
