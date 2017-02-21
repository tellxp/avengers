import {
  Component, OnInit, Input, ElementRef, AfterViewInit, ContentChildren, QueryList,
  AfterContentInit, ContentChild
} from '@angular/core';
import {DomService} from "../common/dom.service";
import {MenuPanel} from "./menu-panel.component";
import {isNullOrUndefined} from "util";

@Component({
  selector: 'ave-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.scss'],
  providers: [DomService]
})
export class MenuItem implements OnInit, AfterContentInit, AfterViewInit {
  @Input() title: string;
  @ContentChild(MenuPanel) contentPanel: MenuPanel;
  panel: MenuPanel;
  public domService: DomService;
  private expanded: boolean;

  type: MenuItemType;

  constructor(el: ElementRef, dom: DomService) {
    this.domService = dom;
    this.domService.loadElement(el);
  }

  ngAfterContentInit() {
    this.initPanel();
  }

  initPanel() {
    if (!isNullOrUndefined(this.contentPanel)) {
      this.panel = this.contentPanel;
      this.panel.setParentItem(this);
    }
  }

  ngAfterViewInit() {
  }

  onClick() {
    this.expanded = !this.expanded;
  }

  ngOnInit() {
  }
}
enum MenuItemType {
  Entry,
  Item
}
