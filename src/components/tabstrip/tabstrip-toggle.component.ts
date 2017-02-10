import {Component, Input, Output, EventEmitter, OnInit, AfterContentInit} from "@angular/core";
import {TabstripBar} from "./tabstrip-bar.component";


@Component({
  selector: 'ave-tabstrip-toggle',
  templateUrl: './tabstrip-toggle.component.html',
  styleUrls: ['./tabstrip-toggle.component.scss']
})
export class TabstripToggle implements OnInit, AfterContentInit {


  private parentBar: TabstripBar;

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
  private togglePanel() {
    this.expanded = this.parentBar.isPanelExpanded();
    if (this.expanded) {
      this.parentBar.collapsePanel();
      this.expanded = false;
    } else {
      this.parentBar.expandPanel();
      this.expanded = true;
    }

  }

  onToggleClick() {
    this.togglePanel();
  }
}
