import {
  Component, OnInit, ContentChildren, QueryList, AfterContentInit, ViewContainerRef,
  AfterViewInit, AfterViewChecked, OnChanges, AfterContentChecked, OnDestroy, DoCheck
} from '@angular/core';
import {DomService} from '../common/dom.service';
import {MenuItem} from './menu-item.component';

@Component({
  selector: 'ave-menu-group',
  templateUrl: './menu-group.component.html',
  styleUrls: ['./menu-group.component.scss'],
  providers: [DomService]
})
export class MenuGroup implements AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked {
  @ContentChildren(MenuItem) contentItems: QueryList<MenuItem>;
  // items: MenuItem[];
  constructor(dom: DomService) {

  }

  ngAfterContentInit() {
    this.initItems();
  }
  initItems() {
    // this.items = this.contentItems.toArray();
  }
  ngAfterContentChecked() {
  }
  ngAfterViewInit() {
  }
  ngAfterViewChecked() {
  }

  onClick() {

  }
}
