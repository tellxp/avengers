import {Component, Input, Output, EventEmitter, OnInit, AfterContentInit, ElementRef} from '@angular/core';
import {TabstripBar} from './tabstrip-bar.component';
import {TabstripPage} from './tabstrip-page.component';
import {isNullOrUndefined} from 'util';
import {TabstripPanel} from './tabstrip-panel.component';
import {Widget} from "../common/widget.component";
import {DomService} from "../common/dom.service";
@Component({
  selector: 'ave-tabstrip-tab',
  templateUrl: './tabstrip-tab.component.html',
  styleUrls: ['./tabstrip-tab.component.scss'],
  providers: [DomService]
})
export class TabstripTab extends Widget implements OnInit, AfterContentInit {

  private pairedPanel: TabstripPanel;

  @Input() private page: TabstripPage;

  @Input() private active: boolean;

  private parentBar: TabstripBar;

  ngOnInit() {

  }

  ngAfterContentInit() {
    this.setPage();
  }

  constructor(elementRef: ElementRef, domService: DomService) {
    super(elementRef, domService);
  }

  public setParent(bar: TabstripBar) {
    this.parentBar = bar;
  }

  public setPairPanel(panel: TabstripPanel) {
    this.pairedPanel = panel;
  }

  public setPage() {
    this.page.setParentTab(this);
  }

  public isActive(): boolean {
    if (this.active) {
      return true;
    } else {
      return false;
    }
  }

  public deactivate() {
    this.active = false;
    this.parentBar.setActiveTab(null);
  }

  public activate() {
    this.active = true;
    this.parentBar.setActiveTab(this);
  }

  private showPage() {
    this.pairedPanel.expand();
  }

  onClick() {
    let currentActiveTab: TabstripTab = this.parentBar.getActiveTab();
    if (isNullOrUndefined(currentActiveTab)) {
      this.activate();
    } else {
      currentActiveTab.deactivate();
      this.activate();
    }
    this.showPage();
  }
}
