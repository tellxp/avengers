import {Component, Input, Output, EventEmitter, OnInit, AfterContentInit} from "@angular/core";
import {TabstripBar} from "./tabstrip-bar.component";
import {TabstripPanel} from "./tabstrip-panel.component";


@Component({
  selector: 'ave-tabstrip-toggle',
  templateUrl: './tabstrip-toggle.component.html',
  styleUrls: ['./tabstrip-toggle.component.scss']
})
export class TabstripToggle implements OnInit, AfterContentInit {


  private parentBar: TabstripBar;

  private pairedPanel: TabstripPanel;

  private expanded: boolean;

  ngOnInit() {

  }

  ngAfterContentInit() {
    this.expanded = false;
  }

  constructor() {
  }

  public setParent(bar: TabstripBar) {
    this.parentBar = bar;
  }
  public setPairedPanel(panel: TabstripPanel) {
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
