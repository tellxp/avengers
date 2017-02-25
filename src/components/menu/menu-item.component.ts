import {
  Component, OnInit, Input, ElementRef, AfterViewInit, ContentChildren, QueryList,
  AfterContentInit, ContentChild, ViewChild
} from '@angular/core';
import {DomService} from "../common/dom.service";
import {MenuPanel} from "./menu-panel.component";
import {isNullOrUndefined} from "util";
import {PopupOrientation, Popup} from "../popup/popup.component";

@Component({
  selector: 'ave-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.scss'],
  providers: [DomService]
})
export class MenuItem implements OnInit, AfterContentInit, AfterViewInit {
  @Input() title: string;
  @ContentChild(MenuPanel) contentPanel: MenuPanel;
  @Input() panel: MenuPanel;
  expanded: boolean;
  @ViewChild(Popup) popup: Popup;

  orientation: PopupOrientation;
  public domService: DomService;

  constructor(el: ElementRef, dom: DomService) {
    this.orientation = PopupOrientation.Right;
    this.expanded = false;
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

  onFocus() {

  }
  onClick() {
    this.expanded = !this.expanded;
  }
  onBlur() {
    // this.expanded = false;
  }
  ngOnInit() {
  }
}
