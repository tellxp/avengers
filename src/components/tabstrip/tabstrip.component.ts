import {
  Component,
  Input, OnInit, AfterContentInit, ContentChildren, QueryList, ContentChild,
} from '@angular/core';

import {TabstripBar} from "./tabstrip-bar.component";
import {TabstripPanel} from "./tabstrip-panel.component";



@Component({
  selector: 'ave-tabstrip',
  templateUrl: './tabstrip.component.html',
  styleUrls: ['./tabstrip.component.scss']
})
export class Tabstrip implements OnInit, AfterContentInit {

  @ContentChild(TabstripBar) private contentBar: TabstripBar;
  @ContentChild(TabstripPanel) private contentPanel: TabstripPanel;

  private bar: TabstripBar;
  private panel: TabstripPanel;

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

