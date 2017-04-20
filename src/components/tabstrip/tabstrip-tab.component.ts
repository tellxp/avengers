import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  ElementRef,
  Input,
  OnChanges,
  OnDestroy,
  OnInit
} from '@angular/core';
import {TabstripBarComponent} from './tabstrip-bar.component';
import {TabstripPageComponent} from './tabstrip-page.component';
import {isNullOrUndefined} from 'util';
import {TabstripPanelComponent} from './tabstrip-panel.component';
import {WidgetComponent} from '../core/widget.component';
import {DomService} from '../core/dom.service';
@Component({
  selector: 'ave-tabstrip-tab',
  templateUrl: './tabstrip-tab.component.html',
  styleUrls: ['./tabstrip-tab.component.scss'],
  providers: [DomService]
})
export class TabstripTabComponent extends WidgetComponent implements OnChanges,
  OnInit,
  DoCheck,
  AfterContentInit, AfterContentChecked,
  AfterViewInit, AfterViewChecked,
  OnDestroy {

  @Input() public attachedPage: TabstripPageComponent;

  @Input() public active: boolean;

  private parentBar: TabstripBarComponent;

  public attachedPanel: TabstripPanelComponent;


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

  public setParentBar(bar: TabstripBarComponent) {
    this.parentBar = bar;
  }

  public attachPanel(panel: TabstripPanelComponent) {
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

  onClick() {
    const currentActiveTab: TabstripTabComponent = this.parentBar.getActiveTab();
    if (isNullOrUndefined(currentActiveTab)) {
      this.activate();
    } else {
      currentActiveTab.deactivate();
      this.activate();
    }
    this.attachedPanel.expand();
  }
}
