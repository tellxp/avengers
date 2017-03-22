import {
  Component, Input, Output, EventEmitter, OnInit, AfterContentInit, ElementRef, DoCheck,
  OnChanges, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy
} from '@angular/core';
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
export class TabstripTab extends Widget implements  OnChanges,
  OnInit,
  DoCheck,
  AfterContentInit, AfterContentChecked,
  AfterViewInit, AfterViewChecked,
  OnDestroy {

  @Input() public attachedPage: TabstripPage;

  @Input() private active: boolean;

  private parentBar: TabstripBar;

  private attachedPanel: TabstripPanel;


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

    this.attachPage();
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

  constructor(elementRef: ElementRef, domService: DomService) {
    super(elementRef, domService);
  }

  init() {
    this.parentBar = null;
    this.attachedPanel = null;
  }
  public setParentBar(bar: TabstripBar) {
    this.parentBar = bar;
  }

  public attachPanel(panel: TabstripPanel) {
    this.attachedPanel = panel;
  }

  public attachPage() {
    this.attachedPage.bindTab(this);
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
    this.attachedPage.deactivate();
    this.attachedPanel.activePage = null;
    this.parentBar.setActiveTab(null);
  }

  public activate() {
    this.active = true;
    this.attachedPage.activate();
    this.attachedPanel.activePage = this.attachedPage;
    this.parentBar.setActiveTab(this);
  }

  private showPage() {
    this.attachedPanel.expand();
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
