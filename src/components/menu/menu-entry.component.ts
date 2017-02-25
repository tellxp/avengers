import {
  Component, OnInit, AfterContentInit, Input, ElementRef, ContentChildren, QueryList,
  ContentChild, AfterViewInit, ViewChild, AfterViewChecked
} from '@angular/core';
import {DomService} from "../common/dom.service";
import {MenuPanel} from "./menu-panel.component";
import {Popup} from "../popup/popup.component";

@Component({
  selector: 'ave-menu-entry',
  templateUrl: './menu-entry.component.html',
  styleUrls: ['./menu-entry.component.scss'],
  providers: [DomService]
})
export class MenuEntry implements OnInit, AfterContentInit, AfterViewInit, AfterViewChecked {

  @Input() title: string;
  @ContentChild(MenuPanel) contentPanel: MenuPanel;
  @ViewChild(Popup) popup: Popup;
  panel: MenuPanel;
  domService: DomService;
  private expanded: boolean;

  constructor(el: ElementRef, dom: DomService) {
    this.domService = dom;
    this.domService.loadElement(el);
  }

  ngOnInit() {
  }
  ngAfterViewChecked() {

  }
  ngAfterViewInit() {
  }
  ngAfterContentInit() {

    this.initPanel();
  }

  initPanel() {
    this.panel = this.contentPanel;
    this.panel.setParentEntry(this);
  }
  onClick() {
    this.expanded = !this.expanded;
  }

}
