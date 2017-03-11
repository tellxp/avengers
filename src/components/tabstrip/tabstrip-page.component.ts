import {Component, OnInit, Input, AfterContentInit, trigger, transition, style, animate} from '@angular/core';
import {TabstripPanelComponent} from './tabstrip-panel.component';
import {TabstripTabComponent} from './tabstrip-tab.component';

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
export class TabstripPageComponent implements OnInit, AfterContentInit {

  private parentTab: TabstripTabComponent;

  private parentPanel: TabstripPanelComponent;

  constructor() {
  }

  ngOnInit() {
  }

  ngAfterContentInit() {
  }

  public setParentTab(tab: TabstripTabComponent) {
    this.parentTab = tab;
  }

  public setParentPanel(panel: TabstripPanelComponent) {
    this.parentPanel = panel;
  }
}
