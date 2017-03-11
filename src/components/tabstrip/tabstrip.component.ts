import {
  Component,
  Input, OnInit, AfterContentInit, ContentChildren, QueryList, ContentChild,
} from '@angular/core';

import {TabstripBarComponent} from './tabstrip-bar.component';
import {TabstripPanelComponent} from './tabstrip-panel.component';



@Component({
  selector: 'ave-tabstrip',
  templateUrl: './tabstrip.component.html',
  styleUrls: ['./tabstrip.component.scss']
})
export class TabstripComponent implements OnInit, AfterContentInit {

  @ContentChild(TabstripBarComponent) private contentBar: TabstripBarComponent;
  @ContentChild(TabstripPanelComponent) private contentPanel: TabstripPanelComponent;

  private bar: TabstripBarComponent;
  private panel: TabstripPanelComponent;

  ngOnInit() {
  }

  ngAfterContentInit() {
    this.init();
  }

  constructor() {

  }

  private init() {
    this.loadBar();
    this.loadPanel();
    this.pairBarAndPanel();
  }

  private loadBar() {
    this.bar = this.contentBar;
    this.bar.setParentTabstrip(this);
  }

  private loadPanel() {
    this.panel = this.contentPanel;
    this.panel.attachToTabstrip(this);
  }

  private pairBarAndPanel() {
    this.bar.setPairedPanel(this.panel);
    this.bar.pairTabAndPanel(this.panel);
    this.bar.pairToggleAndPanel(this.panel);

    this.panel.setPairedBar(this.bar);
  }

}

