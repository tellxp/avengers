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
export class MenuGroup implements OnChanges, OnInit, DoCheck,
  AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked,OnDestroy {
  items: MenuItem[];

  constructor(dom: DomService, public viewRef: ViewContainerRef) {

  }

  @ContentChildren(MenuItem) contentItems: QueryList<MenuItem>;
  ngOnChanges() {
  }

  ngOnInit() {
  }
  ngDoCheck() {
  }

  ngAfterContentInit() {
    this.items = this.contentItems.toArray();
  }
  ngAfterContentChecked() {
  }
  ngAfterViewInit() {
  }
  ngAfterViewChecked() {
  }
  ngOnDestroy() {
  }
  onClick() {

  }
}
