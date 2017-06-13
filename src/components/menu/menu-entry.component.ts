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

  // rootMenu: MenuComponent;
  // rootItems: MenuItemComponent[];
  // activeRootItem: MenuItemComponent;
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
    // this.loadItems();

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

  // loadItems() {
  //   this.rootItems = this.contentItems.toArray();
  //   const length = this.rootItems.length;
  //   if (this.hasRootItem()) {
  //     for (let i = 0; i < length; i++) {
  //       // this.rootItems[i].setRootMenu(this.rootMenu);
  //       // this.rootItems[i].setRootEntry(this);
  //       // this.rootItems[i].setRootItem(this.rootItems[i]);
  //       // this.rootItems[i].setParentItem(this.rootItems[i]);
  //       // this.rootItems[i].loadChildItems();
  //     }
  //   }
  // }

  // setParentMenu(menu: MenuComponent) {
  //   // this.rootMenu = menu;
  // }
  //
  hasRootItem() {
    // if (this.rootItems.length > 0) {
    //   return true;
    // } else {
    //   return false;
    // }
    return false;

  }
  //
  // deactivateRootItem() {
  //   const length = this.rootItems.length;
  //   for (let i = 0; i < length; i++) {
  //     this.rootItems[i].deactivateChildItem();
  //     this.rootItems[i].deactivate();
  //   }
  // }
  //
  // activate() {
  //   this.active = true;
  // }
  //
  // deactivate() {
  //   this.active = false;
  // }
  //
  // activateRootItem(item: MenuItemComponent) {
  //   if (!isNullOrUndefined(this.activeRootItem)) {
  //     this.activeRootItem.deactivateChildItem();
  //     this.activeRootItem.deactivate();
  //   }
  //   this.activeRootItem = item;
  //   this.activeRootItem.activate();
  // }
  //
  // onHeaderClick() {
  //   // if (this.active) {
  //   //   this.rootMenu.deactivateEntry(this);
  //   // } else {
  //   //   this.rootMenu.activateEntry(this);
  //   // }
  // }
  //
  // onHeaderBlur() {
  //
  // }
}
