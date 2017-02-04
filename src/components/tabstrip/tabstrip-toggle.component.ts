import {Component, Input, Output, EventEmitter, OnInit, AfterContentInit} from "@angular/core";
import {TabstripBar} from "./tabstrip-bar.component";
import {TabstripPage} from "./tabstrip-page.component";
import {isNullOrUndefined} from "util";
@Component({
  selector: 'ave-tabstrip-toggle',
  templateUrl: './tabstrip-toggle.component.html',
  styleUrls: ['./tabstrip-toggle.component.scss']
})
export class TabstripToggle implements OnInit, AfterContentInit {


  @Input() parentBar: TabstripBar;

  ngOnInit() {

  }

  ngAfterContentInit() {
  }

  constructor() {
  }

  togglePanel() {
    let expanded = this.parentBar.parentTabstrip.panel.expanded;
    if (expanded) {
      this.parentBar.parentTabstrip.panel.collapse();
    } else {
      this.parentBar.parentTabstrip.panel.expand();
    }
  }

  onToggleClick() {
    this.togglePanel();
  }
}
