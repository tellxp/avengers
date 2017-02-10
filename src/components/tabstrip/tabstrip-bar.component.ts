import {
  Component, OnInit, Input, ContentChildren, QueryList, AfterContentInit, ContentChild,
  HostBinding
} from '@angular/core';
import {TabstripTab} from "./tabstrip-tab.component";
import {isNullOrUndefined} from "util";
import {TabstripToggle} from "./tabstrip-toggle.component";
import {Tabstrip} from "./tabstrip.component";
import {TabstripPanel} from "./tabstrip-panel.component";

@Component({
  selector: 'ave-tabstrip-bar',
  templateUrl: './tabstrip-bar.component.html',
  styleUrls: ['./tabstrip-bar.component.scss']
})
export class TabstripBar implements OnInit, AfterContentInit {

  @ContentChildren(TabstripTab) private contentTabs: QueryList<TabstripTab>;

  @ContentChild(TabstripToggle) private contentToggle: TabstripToggle;


  private _tabs: TabstripTab[];

  private _toggle: TabstripToggle;

  private _parentTabstrip: Tabstrip;

  private _panel: TabstripPanel;

  private _activeTab: TabstripTab;


  constructor() {
  }

  ngOnInit() {
  }

  ngAfterContentInit() {
    this.setTabs();
    this.setDefaultTab();
    this.setToggle();
  }

  private setTabs() {
    this._tabs = this.contentTabs.toArray();
    if (isNullOrUndefined(this._tabs)) {
      throw new Error("tabs is null or undefined");
    } else {
      let length: number = this._tabs.length;
      for (let i = 0; i < length; i++) {
        this._tabs[i].setParent(this);
        if (this._tabs[i].isActive()) {
          this._activeTab = this._tabs[i];
        }
      }
    }
  }

  private hasActiveTab():boolean {
    if (!isNullOrUndefined(this._activeTab)) {
      return true;
    } else {
      return false;
    }
  }

  private setToggle() {
    this._toggle = this.contentToggle;
    this._toggle.setParent(this);
  }

  public setParent(tabstrip: Tabstrip) {
    this._parentTabstrip = tabstrip;
  }

  public setActiveTab(tab: TabstripTab) {
    this._activeTab = tab;
  }

  public getActiveTab(): TabstripTab {
    return this._activeTab;
  }
  public setPanel(panel: TabstripPanel) {
    this._panel = panel;
  }

  public isPanelExpanded(): boolean {
    return this._panel.isExpanded();
  }

  public expandPanel() {
    this._panel.expand();
  }

  public collapsePanel() {
    this._panel.collapse();
  }

}
