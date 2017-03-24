import {
  Component,
  OnInit,
  ContentChildren,
  QueryList,
  AfterContentInit,
  ContentChild,
  ElementRef,
  DoCheck,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
  OnChanges
} from '@angular/core';
import {TabstripTabComponent} from './tabstrip-tab.component';
import {isNullOrUndefined} from 'util';
import {TabstripToggleComponent} from './tabstrip-toggle.component';
import {TabstripComponent} from './tabstrip.component';
import {TabstripPanelComponent} from './tabstrip-panel.component';
import {WidgetComponent} from '../common/widget.component';
import {DomService} from '../common/dom.service';

@Component({
  selector: 'ave-tabstrip-bar',
  templateUrl: './tabstrip-bar.component.html',
  styleUrls: ['./tabstrip-bar.component.scss'],
  providers: [DomService]
})
export class TabstripBarComponent extends WidgetComponent implements OnChanges,
  OnInit,
  DoCheck,
  AfterContentInit, AfterContentChecked,
  AfterViewInit, AfterViewChecked,
  OnDestroy {

  @ContentChildren(TabstripTabComponent) private contentTabs: QueryList<TabstripTabComponent>;
  private _tabs: TabstripTabComponent[];


  @ContentChild(TabstripToggleComponent) private contentToggle: TabstripToggleComponent;
  private _toggle: TabstripToggleComponent;

  private _parentTabstrip: TabstripComponent;

  private _attachedPanel: TabstripPanelComponent;


  private _activeTab: TabstripTabComponent;


  constructor(elementRef: ElementRef, domService: DomService) {
    super(elementRef, domService);
  }

  ngOnChanges() {
    super.ngOnChanges();
  }

  ngOnInit() {
    super.ngOnInit();

    this.init();
  }

  ngDoCheck() {
    super.ngDoCheck();
  }

  ngAfterContentInit() {
    super.ngAfterContentInit();

    this.loadTabs();
    this.loadToggle();
  }

  ngAfterContentChecked() {
    super.ngAfterContentChecked();

  }

  ngAfterViewInit() {
    super.ngAfterViewInit();
  }

  ngAfterViewChecked() {
    super.ngAfterViewChecked();
  }

  ngOnDestroy() {
    super.ngOnDestroy();
  }

  init() {
    this._tabs = null;
    this._toggle = null;
    this._parentTabstrip = null;
    this._attachedPanel = null;
    this._activeTab = null;
  }

  public setParentTabstrip(tabstrip: TabstripComponent) {
    this._parentTabstrip = tabstrip;
  }

  public attachPanel(panel: TabstripPanelComponent) {
    this._attachedPanel = panel;
  }

  private loadTabs() {
    this._tabs = this.contentTabs.toArray();

    let length = this._tabs.length;
    for (let i = 0; i < length; i++) {
      this._tabs[i].setParentBar(this);
      if (this._tabs[i].isActive()) {
        this._activeTab = this._tabs[i];
      }
    }
  }

  public attachPanelToTab(panel: TabstripPanelComponent) {
    let length = this._tabs.length;
    for (let i = 0; i < length; i++) {
      this._tabs[i].attachPanel(panel);
    }
  }

  public setActiveTab(tab: TabstripTabComponent) {
    this._activeTab = tab;
  }

  public getActiveTab(): TabstripTabComponent {
    return this._activeTab;
  }

  public setDefaultActiveTab() {
    if (isNullOrUndefined(this._activeTab)) {
      this._activeTab = this._tabs[0];
      this._activeTab.activate();
    }
  }

  private loadToggle() {
    this._toggle = this.contentToggle;
    this._toggle.setParentBar(this);
  }

  public attachPanelToToggle(panel: TabstripPanelComponent) {
    this._toggle.bindPanel(panel);
  }
  private hasActiveTab(): boolean {
    if (!isNullOrUndefined(this._activeTab)) {
      return true;
    } else {
      return false;
    }
  }

}
