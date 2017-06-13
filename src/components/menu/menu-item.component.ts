import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  ContentChildren,
  DoCheck,
  ElementRef,
  HostBinding,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  QueryList,
  ViewEncapsulation
} from '@angular/core';
import {DomService} from '../core/dom.service';
import {PopupOrientation} from '../popup/popup.component';
import {isNullOrUndefined} from 'util';
import {WidgetComponent} from '../core/widget.component';
import {MenuComponent} from './menu.component';
import {MenuEntryComponent} from './menu-entry.component';

@Component({
  selector: 'ave-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.scss'],
  encapsulation: ViewEncapsulation.None,

  providers: [DomService]
})
export class MenuItemComponent extends WidgetComponent implements OnChanges,
  OnInit,
  DoCheck,
  AfterContentInit, AfterContentChecked,
  AfterViewInit, AfterViewChecked,
  OnDestroy {

  @HostBinding('class.v-menu-item') 'true';
  @HostBinding('attr.tabindex') '-1';

  @Input() title: string;
  @ContentChildren(MenuItemComponent) contentItems: QueryList<MenuItemComponent>;

  rootItem: MenuItemComponent;
  rootEntry: MenuEntryComponent;
  rootMenu: MenuComponent;

  parentItem: MenuItemComponent;

  childItems: MenuItemComponent[];
  activeChildItem: MenuItemComponent;
  active: boolean;
  orientation: PopupOrientation;

  constructor(elementRef: ElementRef, domService: DomService) {
    super(elementRef, domService);

    this.orientation = PopupOrientation.Right;
    this.active = false;
  }

  ngOnChanges() {
    super.ngOnChanges();
  }

  ngOnInit() {
    super.ngOnInit();
  }

  ngDoCheck() {
    super.ngDoCheck();
  }

  ngAfterContentInit() {
    super.ngAfterContentInit();
    if (this.title === '2.1') {
      // console.log(this.contentItems);
    }
  }

  ngAfterContentChecked() {
    super.ngAfterContentChecked();
  }

  ngAfterViewInit() {
    super.ngAfterViewInit();
  }

  ngAfterViewChecked() {
    super.ngAfterViewInit();
  }

  ngOnDestroy() {
    super.ngOnDestroy();
  }

  loadChildItems() {

    const contentLength = this.contentItems.toArray().length;
    this.childItems = this.contentItems.toArray().slice(1, contentLength);
    const length = this.childItems.length;
    if (this.hasChildItem()) {
      for (let i = 0; i < length; i++) {
        this.childItems[i].setParentItem(this);
        this.childItems[i].setRootEntry(this.rootEntry);
        this.childItems[i].setRootItem(this.rootItem);
        this.childItems[i].setRootMenu(this.rootMenu);
        this.childItems[i].loadChildItems();
      }
    }
  }


  hasChildItem(): boolean {
    if (this.childItems.length > 0) {
      return true;
    } else {
      return false;
    }
  }

  activateChildItem(item: MenuItemComponent) {
    if (!isNullOrUndefined(this.activeChildItem)) {
      this.activeChildItem.deactivateChildItem();
      this.activeChildItem.deactivate();
    }
    this.activeChildItem = item;
    this.activeChildItem.activate();
  }

  deactivateChildItem(): boolean {
    if (this.childItems.length > 0) {
      const length = this.childItems.length;
      for (let i = 0; i < length; i++) {
        this.childItems[i].deactivateChildItem();
        this.childItems[i].deactivate();
      }
    } else {
      return true;
    }
  }

  isRootItem(): boolean {
    if (this.rootItem === this) {
      return true;
    } else {
      return false;
    }
  }

  activate() {
    this.active = true;
  }

  deactivate() {
    this.active = false;
  }

  onHeaderMousedown() {
    if (this.isRootItem()) {
      this.rootEntry.activateRootItem(this);
    } else {
      this.parentItem.activateChildItem(this);
    }
  }

  onMouseOut() {

  }

  onHeaderBlur() {
    if (this.active && isNullOrUndefined(this.activeChildItem)) {
      this.rootMenu.deactivateEntry(this.rootEntry);
    }
  }

  setRootEntry(entry: MenuEntryComponent) {
    this.rootEntry = entry;
  }

  setRootItem(item: MenuItemComponent) {
    this.rootItem = item;
  }

  setParentItem(item: MenuItemComponent) {
    this.parentItem = item;
  }

  setRootMenu(menu: MenuComponent) {
    this.rootMenu = menu;
  }
}
