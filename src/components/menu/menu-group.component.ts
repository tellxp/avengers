import {
  Component, OnInit, ContentChildren, QueryList, AfterContentInit, ViewContainerRef,
  AfterViewInit, AfterViewChecked, OnChanges, AfterContentChecked, OnDestroy, DoCheck
} from '@angular/core';
import {DomService} from '../common/dom.service';
import {MenuItemComponent} from './menu-item.component';

@Component({
  selector: 'ave-menu-group',
  templateUrl: './menu-group.component.html',
  styleUrls: ['./menu-group.component.scss'],
  providers: [DomService]
})
export class MenuGroupComponent implements AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked {
  @ContentChildren(MenuItemComponent) contentItems: QueryList<MenuItemComponent>;
  // items: MenuItemComponent[];
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
