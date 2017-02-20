import {Component, OnInit} from '@angular/core';
import {DomService} from "../common/dom.service";

@Component({
  selector: 'ave-menu-group',
  templateUrl: './menu-group.component.html',
  styleUrls: ['./menu-group.component.scss'],
  providers: [DomService]
})
export class MenuGroup implements OnInit {
  constructor(dom: DomService) {
  }

  ngOnInit() {
  }

  onClick() {

  }
}
