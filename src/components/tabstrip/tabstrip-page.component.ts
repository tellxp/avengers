import {
  Component, OnInit, Input, AfterContentInit, trigger, transition, style, animate,
  ElementRef, DoCheck, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy, OnChanges, ViewEncapsulation
} from '@angular/core';
import {TabstripPanelComponent} from './tabstrip-panel.component';
import {TabstripTabComponent} from './tabstrip-tab.component';
import {WidgetComponent} from '../core/widget.component';
import {DomService} from '../core/dom.service';

@Component({
  selector: 'ave-tabstrip-page',
  templateUrl: './tabstrip-page.component.html',
  styleUrls: ['./tabstrip-page.component.scss'],
  encapsulation: ViewEncapsulation.None,

  providers: [DomService]
})
export class TabstripPageComponent extends WidgetComponent implements OnChanges,
  OnInit,
  DoCheck,
  AfterContentInit, AfterContentChecked,
  AfterViewInit, AfterViewChecked,
  OnDestroy {

  private bindedTab: TabstripTabComponent;

  private parentPanel: TabstripPanelComponent;

  public active: boolean;

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
    this.active = false;
  }

  activate() {
    this.active = true;
  }
  deactivate() {
    this.active = false;
  }
  public bindTab(tab: TabstripTabComponent) {
    this.bindedTab = tab;
  }

  public setParentPanel(panel: TabstripPanelComponent) {
    this.parentPanel = panel;
  }
}
