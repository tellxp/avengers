import {Component, OnInit, AfterContentInit, Input, ElementRef, ContentChildren, QueryList} from '@angular/core';
import {DomService} from "../common/dom.service";
import {MenuPanel} from "./menu-panel.component";

@Component({
  selector: 'ave-menu-entry',
  templateUrl: './menu-entry.component.html',
  styleUrls: ['./menu-entry.component.scss'],
  providers: [DomService]
})
export class MenuEntry implements OnInit, AfterContentInit {

  @Input() title: string;
  @Input() panel: MenuPanel;
  domService: DomService;
  private expanded: boolean;

  constructor(el: ElementRef, dom: DomService) {
    this.domService = dom;
    this.domService.loadElement(el);
  }

  ngOnInit() {
  }

  ngAfterContentInit() {
  }
  onClick() {
    this.expanded = !this.expanded;
  }

}
