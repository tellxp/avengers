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
} from "@angular/core";
import {TabstripTab} from "./tabstrip-tab.component";
import {isNullOrUndefined} from "util";
import {TabstripToggle} from "./tabstrip-toggle.component";
import {Tabstrip} from "./tabstrip.component";
import {TabstripPanel} from "./tabstrip-panel.component";
import {Widget} from "../common/widget.component";
import {DomService} from "../common/dom.service";

@Component({
  selector: 'ave-tabstrip-bar',
  templateUrl: './tabstrip-bar.component.html',
  styleUrls: ['./tabstrip-bar.component.scss'],
  providers: [DomService]
})
export class TabstripBar extends Widget implements OnChanges,
  OnInit,
  DoCheck,
  AfterContentInit, AfterContentChecked,
  AfterViewInit, AfterViewChecked,
  OnDestroy {

  @ContentChildren(TabstripTab) private contentTabs: QueryList<TabstripTab>;
  private _tabs: TabstripTab[];


  @ContentChild(TabstripToggle) private contentToggle: TabstripToggle;
  private _toggle: TabstripToggle;

  private _parentTabstrip: Tabstrip;

  private _attachedPanel: TabstripPanel;


  private _activeTab: TabstripTab;


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

  public setParentTabstrip(tabstrip: Tabstrip) {
    this._parentTabstrip = tabstrip;
  }

  public attachPanel(panel: TabstripPanel) {
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

  public attachPanelToTab(panel: TabstripPanel) {
    let length = this._tabs.length;
    for (let i = 0; i < length; i++) {
      this._tabs[i].attachPanel(panel);
    }
  }

  public setActiveTab(tab: TabstripTab) {
    this._activeTab = tab;
  }

  public getActiveTab(): TabstripTab {
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

  public attachPanelToToggle(panel: TabstripPanel) {
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
