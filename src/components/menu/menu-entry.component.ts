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
import {Dom} from '../core/dom';
import {Widget} from '../core/widget';
import {MenuComponent} from './menu.component';
import {MenuItemComponent} from './menu-item.component';
import {PopupOrientation} from '../popup/popup.component';
import {isNullOrUndefined} from 'util';
import {expandAnimations} from '../animation/expand-animations';


@Component({
  selector: 'ave-menu-entry',
  templateUrl: './menu-entry.component.html',
  styleUrls: ['./menu-entry.component.scss'],
  animations: [expandAnimations],
  encapsulation: ViewEncapsulation.None
})
export class MenuEntryComponent extends Widget implements OnChanges,
  OnInit,
  DoCheck,
  AfterContentInit, AfterContentChecked,
  AfterViewInit, AfterViewChecked,
  OnDestroy {

  @HostBinding('class.v-menu-entry') 'true';
  @HostBinding('attr.tabindex') '-1';
  @Input() title: string;

  @ContentChildren(MenuItemComponent) contentItems: QueryList<MenuItemComponent>;

  rootMenu: MenuComponent;
  rootItems: MenuItemComponent[];
  activeRootItem: MenuItemComponent;
  orientation: PopupOrientation;
  active: boolean;

  constructor(elementRef: ElementRef) {
    super(elementRef);
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

  loadRootItems() {
    this.rootItems = this.contentItems.toArray();
    const length = this.rootItems.length;
    if (this.hasRootItem()) {
      for (let i = 0; i < length; i++) {
        this.rootItems[i].setRootMenu(this.rootMenu);
        this.rootItems[i].setRootEntry(this);
        this.rootItems[i].setRootItem(this.rootItems[i]);
        this.rootItems[i].setParentItem(this.rootItems[i]);
        this.rootItems[i].loadChildItems();
      }
    }
  }

  setParentMenu(menu: MenuComponent) {
    this.rootMenu = menu;
  }

  hasRootItem(): boolean {
    if (this.rootItems.length > 0) {
      return true;
    } else {
      return false;
    }

  }

  deactivateRootItem() {
    const length = this.rootItems.length;
    for (let i = 0; i < length; i++) {
      this.rootItems[i].deactivateChildItem();
      this.rootItems[i].deactivate();
    }
  }

  activate() {
    this.active = true;
  }

  deactivate() {
    this.active = false;
  }

  activateRootItem(item: MenuItemComponent) {
    if (!isNullOrUndefined(this.activeRootItem)) {
      this.activeRootItem.deactivateChildItem();
      this.activeRootItem.deactivate();
    }
    this.activeRootItem = item;
    this.activeRootItem.activate();
  }

  onHeaderClick() {
    if (this.active) {
      this.rootMenu.deactivateEntry(this);
    } else {
      this.rootMenu.activateEntry(this);
    }
  }

  onHeaderBlur() {
    if (this.active && isNullOrUndefined(this.activeRootItem)) {
      this.rootMenu.deactivateEntry(this);
    }
  }
}
