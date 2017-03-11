import {
  Component, OnInit, Input, ContentChildren, QueryList, AfterContentInit, ContentChild,
  HostBinding
} from '@angular/core';
import {TabstripTabComponent} from './tabstrip-tab.component';
import {isNullOrUndefined} from 'util';
import {TabstripToggleComponent} from './tabstrip-toggle.component';
import {TabstripComponent} from './tabstrip.component';
import {TabstripPanelComponent} from './tabstrip-panel.component';

@Component({
  selector: 'ave-tabstrip-bar',
  templateUrl: './tabstrip-bar.component.html',
  styleUrls: ['./tabstrip-bar.component.scss']
})
export class TabstripBarComponent implements OnInit, AfterContentInit {

  @ContentChildren(TabstripTabComponent) private contentTabs: QueryList<TabstripTabComponent>;

  @ContentChild(TabstripToggleComponent) private contentToggle: TabstripToggleComponent;


  private _tabs: TabstripTabComponent[];

  private _toggle: TabstripToggleComponent;

  private _parentTabstrip: TabstripComponent;

  private _pairedPanel: TabstripPanelComponent;

  private _activeTab: TabstripTabComponent;


  constructor() {
  }

  ngOnInit() {
  }

  ngAfterContentInit() {
    this.loadTabs();
    this.loadToggle();
    this.setDefaultActiveTab();
  }

  private loadTabs() {
    this._tabs = this.contentTabs.toArray();
    if (isNullOrUndefined(this._tabs)) {
      throw new Error('tabs is null or undefined');
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

  public pairTabAndPanel(panel: TabstripPanelComponent) {
    if (isNullOrUndefined(this._tabs)) {
      throw new Error('tabs is null or undefined');
    } else {
      let length: number = this._tabs.length;
      for (let i = 0; i < length; i++) {
        this._tabs[i].setPairPanel(panel);
      }
    }
  }

  public pairToggleAndPanel(panel: TabstripPanelComponent) {
    this._toggle.setPairedPanel(panel);
  }
  private hasActiveTab():boolean {
    if (!isNullOrUndefined(this._activeTab)) {
      return true;
    } else {
      return false;
    }
  }

  private setDefaultActiveTab() {
    if (!this.hasActiveTab()) {
      this._tabs[0].activate();
    }
  }

  private loadToggle() {
    this._toggle = this.contentToggle;
    this._toggle.setParent(this);
  }

  public setParentTabstrip(tabstrip: TabstripComponent) {
    this._parentTabstrip = tabstrip;
  }

  public setPairedPanel(panel: TabstripPanelComponent) {
    this._pairedPanel = panel;
  }

  public setActiveTab(tab: TabstripTabComponent) {
    this._activeTab = tab;
  }

  public getActiveTab(): TabstripTabComponent {
    return this._activeTab;
  }
}
