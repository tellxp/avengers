import {
  Component, OnInit, Input, AfterContentInit, trigger, transition, style, animate,
  ElementRef
} from '@angular/core';
import {TabstripPanel} from './tabstrip-panel.component';
import {TabstripTab} from './tabstrip-tab.component';
import {Widget} from "../common/widget.component";
import {DomService} from "../common/dom.service";

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
  ],
  providers: [DomService]
})
export class TabstripPage extends Widget implements OnInit, AfterContentInit {

  private parentTab: TabstripTab;

  private parentPanel: TabstripPanel;

  constructor(elementRef: ElementRef, domService: DomService) {
    super(elementRef, domService);
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
