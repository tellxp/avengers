import {Component, OnInit, Input, AfterContentInit, trigger, transition, style, animate} from '@angular/core';
import {TabstripPanel} from './tabstrip-panel.component';
import {TabstripTab} from './tabstrip-tab.component';

@Component({
  selector: 'ave-tabstrip-page',
  templateUrl: './tabstrip-page.component.html',
  host:{'[@fadeIn]': 'true'},
  animations: [
    trigger('fadeIn', [
      transition('void => *', [
        style({
          opacity: 0
        }),
        animate('1s ease')
      ]),
      transition('* => void', [
        animate('0s ease', style({
          opacity: 0
        }))
      ])
    ])
  ]
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
