import {Component, OnInit, Input, AfterContentInit} from '@angular/core';
import {TabstripPanel} from "./tabstrip-panel.component";
import {TabstripTab} from "./tabstrip-tab.component";

@Component({
  selector: 'ave-tabstrip-page',
  templateUrl: './tabstrip-page.component.html'
})
export class TabstripPage implements OnInit, AfterContentInit {

  @Input() matchedTabUid: string;
  @Input() matchedTab: TabstripTab;

  parentPanel: TabstripPanel;

  @Input() active: boolean;

  constructor() {
    this.active = false;
  }

  ngOnInit() {
  }

  ngAfterContentInit() {
  }
}
