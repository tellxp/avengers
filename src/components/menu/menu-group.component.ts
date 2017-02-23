import {Component, OnInit, ContentChildren, QueryList, AfterContentInit} from '@angular/core';
import {DomService} from "../common/dom.service";
import {MenuItem} from "./menu-item.component";

@Component({
  selector: 'ave-menu-group',
  templateUrl: './menu-group.component.html',
  styleUrls: ['./menu-group.component.scss'],
  providers: [DomService]
})
export class MenuGroup implements OnInit, AfterContentInit {
  items: MenuItem[];

  constructor(dom: DomService) {
  }
  ngAfterContentInit() {
    this.items = this.contentItems.toArray();
  }

  @ContentChildren(MenuItem) contentItems: QueryList<MenuItem>;
  ngOnInit() {
  }

  onClick() {

  }
}
