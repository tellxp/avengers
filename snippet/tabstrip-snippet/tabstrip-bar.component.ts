import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  ContentChild,
  ContentChildren,
  DoCheck,
  ElementRef,
  HostBinding,
  OnChanges,
  OnDestroy,
  OnInit,
  QueryList,
  ViewEncapsulation
} from '@angular/core';
import {TabstripTabComponent} from './tabstrip-tab.component';
import {isNullOrUndefined} from 'util';
import {TabstripToggleComponent} from './tabstrip-toggle.component';
import {TabstripComponent} from './tabstrip.component';
import {TabstripPanelComponent} from './tabstrip-panel.component';
import {WidgetComponent} from '../core/widget.component';
import {DomService} from '../core/dom.service';

@Component({
  selector: 'ave-tabstrip-bar',
  templateUrl: './tabstrip-bar.component.html',
  styleUrls: ['./tabstrip-bar.component.scss'],
  encapsulation: ViewEncapsulation.None,

  providers: [DomService]
})
export class TabstripBarComponent extends WidgetComponent implements OnChanges,
  OnInit,
  DoCheck,
  AfterContentInit, AfterContentChecked,
  AfterViewInit, AfterViewChecked,
  OnDestroy {

  @HostBinding('class.v-tabstrip-bar') tabstripBarCssClass = 'true';

  @ContentChildren(TabstripTabComponent) private contentTabs: QueryList<TabstripTabComponent>;
  private tabs: TabstripTabComponent[];


  @ContentChild(TabstripToggleComponent) private contentToggle: TabstripToggleComponent;
  private toggle: TabstripToggleComponent;

  private parentTabstrip: TabstripComponent;

  private attachedPanel: TabstripPanelComponent;


  private activeTab: TabstripTabComponent;

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
    this.tabs = null;
    this.toggle = null;
    this.parentTabstrip = null;
    this.attachedPanel = null;
    this.activeTab = null;
  }

  public setParentTabstrip(tabstrip: TabstripComponent) {
    this.parentTabstrip = tabstrip;
  }

  public attachPanel(panel: TabstripPanelComponent) {
    this.attachedPanel = panel;
  }

  private loadTabs() {
    this.tabs = this.contentTabs.toArray();

    const length = this.tabs.length;
    for (let i = 0; i < length; i++) {
      this.tabs[i].setParentBar(this);
      if (this.tabs[i].isActive()) {
        this.activeTab = this.tabs[i];
      }
    }
  }

  public attachPanelToTab(panel: TabstripPanelComponent) {
    const length = this.tabs.length;
    for (let i = 0; i < length; i++) {
      this.tabs[i].attachPanel(panel);
    }
  }

  public setActiveTab(tab: TabstripTabComponent) {
    this.activeTab = tab;
  }

  public getActiveTab(): TabstripTabComponent {
    return this.activeTab;
  }

  public setDefaultActiveTab() {
    if (isNullOrUndefined(this.activeTab)) {
      this.activeTab = this.tabs[0];
      this.activeTab.activate();
    }
  }

  private loadToggle() {
    this.toggle = this.contentToggle;
    this.toggle.setParentBar(this);
  }

  public attachPanelToToggle(panel: TabstripPanelComponent) {
    this.toggle.bindPanel(panel);
  }

}
