import {Component, OnInit} from '@angular/core';
import {MenuItem} from "./menu-item.component";

@Component({
  selector: 'ave-menu-panel',
  templateUrl: './menu-panel.component.html',
  styleUrls: ['./menu-panel.component.scss']
})
export class MenuPanel implements OnInit {
  parentItem: MenuItem;

  constructor() {
  }

  setParentItem(item: MenuItem) {
    this.parentItem = item;
  }

  ngOnInit() {
  }

}
