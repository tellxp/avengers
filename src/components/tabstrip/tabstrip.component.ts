import {
  Component,
  Input, OnInit, AfterContentInit, ContentChildren, QueryList, ContentChild, ElementRef,
} from '@angular/core';

import {TabstripBar} from './tabstrip-bar.component';
import {TabstripPanel} from './tabstrip-panel.component';
import {Widget} from "../common/widget.component";
import {DomService} from "../common/dom.service";



@Component({
  selector: 'ave-tabstrip',
  templateUrl: './tabstrip.component.html',
  styleUrls: ['./tabstrip.component.scss'],
  providers: [DomService]
})
export class Tabstrip extends Widget implements OnInit, AfterContentInit {

  @ContentChild(TabstripBar) private contentBar: TabstripBar;
  @ContentChild(TabstripPanel) private contentPanel: TabstripPanel;

  private bar: TabstripBar;
  private panel: TabstripPanel;

  ngOnInit() {
  }

  ngAfterContentInit() {
    this.init();
  }

  constructor(elementRef: ElementRef, domService: DomService) {
    super(elementRef, domService);
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

