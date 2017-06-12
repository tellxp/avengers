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
import {WidgetComponent} from '../core/widget.component';
import {MenuComponent} from './menu.component';
import {MenuItemComponent} from './menu-item.component';
import {PopupOrientation} from '../popup/popup.component';
import {isNodeFlagSet} from 'tslint';
import {isNullOrUndefined} from 'util';


@Component({
  selector: 'ave-menu-entry',
  templateUrl: './menu-entry.component.html',
  styleUrls: ['./menu-entry.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [DomService]
})
export class MenuEntryComponent extends WidgetComponent implements OnChanges,
  OnInit,
  DoCheck,
  AfterContentInit, AfterContentChecked,
  AfterViewInit, AfterViewChecked,
  OnDestroy {

  @HostBinding('class.v-menu-entry') 'true';
  @HostBinding('attr.tabindex') '-1';
  @Input() title: string;

  @ContentChildren(MenuItemComponent) contentItems: QueryList<MenuItemComponent>;

  parentMenu: MenuComponent;
  childItems: MenuItemComponent[];
  activeChildItem: MenuItemComponent;
  orientation: PopupOrientation;
  active: boolean;

  constructor(elementRef: ElementRef, domService: DomService) {
    super(elementRef, domService);
    this.orientation = PopupOrientation.Bottom;
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

    this.loadItems();
  }

  ngAfterContentChecked() {
    super.ngAfterContentChecked();
  }

  ngAfterViewInit() {
    super.ngAfterViewInit();
  }

  ngAfterViewChecked() {
    super.ngAfterViewChecked();
  }

  ngOnDestroy() {
    super.ngOnDestroy();
  }

  loadItems() {
    this.childItems = this.contentItems.toArray();
    const length = this.childItems.length;
    for (let i = 0; i < length; i++) {
      this.childItems[i].setRootMenu(this.parentMenu);
      this.childItems[i].setRootEntry(this);
      this.childItems[i].setRootItem(this.childItems[i]);
      this.childItems[i].setParentItem(this.childItems[i]);
    }
  }

  setParentMenu(menu: MenuComponent) {
    this.parentMenu = menu;
  }

  hasChildItem() {
    if (this.childItems.length > 0) {
      return true;
    } else {
      return false;
    }
  }

  deactivateChildItems() {
    const length = this.childItems.length;
    for (let i = 0; i < length; i++) {
      this.childItems[i].deactivateChildItem();
      this.childItems[i].deactivate();
    }
  }

  activate() {
    this.active = true;
  }

  deactivate() {
    this.active = false;
  }

  activateItem(item: MenuItemComponent) {
    if (!isNullOrUndefined(this.activeChildItem)) {
      this.activeChildItem.deactivateChildItem();
    }
    this.activeChildItem = item;
    this.activeChildItem.activate();
  }
  onHeaderClick() {
    if (this.active) {
      this.parentMenu.deactivateEntry(this);
    } else {
      this.parentMenu.activateEntry(this);
    }
  }

  onHeaderBlur() {

  }
}
