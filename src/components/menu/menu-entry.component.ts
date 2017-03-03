import {
  Component, OnInit, AfterContentInit, Input, ElementRef, ContentChildren, QueryList,
  ContentChild, AfterViewInit, ViewChild, AfterViewChecked, Renderer, ViewChildren
} from '@angular/core';
import {DomService, ElementStyle} from '../common/dom.service';
import {MenuPanel} from './menu-panel.component';
import {Popup} from '../popup/popup.component';
import {MenuItem} from "./menu-item.component";

@Component({
  selector: 'ave-menu-entry',
  templateUrl: './menu-entry.component.html',
  styleUrls: ['./menu-entry.component.scss'],
  providers: [DomService]
})
export class MenuEntry implements OnInit, AfterContentInit, AfterViewInit, AfterViewChecked {

  @Input() title: string;
  @ContentChildren(MenuPanel) contentPanels: QueryList<MenuPanel>;
  @ViewChildren(Popup) popups: QueryList<Popup>;
  @ContentChildren(MenuItem) contentItems: QueryList<MenuItem>;
  items: MenuItem[];
  panels: MenuPanel[];
  private expanded: boolean;

  constructor(private el: ElementRef, public dom: DomService,public render: Renderer) {
  }

  ngOnInit() {
  }
  ngAfterViewChecked() {
  }
  ngAfterViewInit() {

  }
  ngAfterContentInit() {
    this.initPanel();
    this.initItems();
  }

  initItems() {
    this.items = this.contentItems.toArray();
  }
  initPanel() {
    this.panels = this.contentPanels.toArray();
    // this.panels.setParentEntry(this);
  }
  onClick() {
    this.expanded = !this.expanded;

  }

}
