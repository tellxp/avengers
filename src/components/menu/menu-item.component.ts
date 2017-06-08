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

  @HostBinding('class.v-menu-item') menuItemCssClass = 'true';
  @HostBinding('attr.tabindex') tabIndex = '-1';
  @Input() title: string;
  @ContentChildren(MenuItemComponent) contentItems: QueryList<MenuItemComponent>;

  parent: any;

  childItems: MenuItemComponent[];
  activeChildItem: MenuItemComponent;
  active: boolean;
  orientation: PopupOrientation;
  public domService: DomService;

  constructor(elementRef: ElementRef, domService: DomService) {
    super(elementRef, domService);

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
    this.init();
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

  init() {
    this.orientation = PopupOrientation.Right;
    this.active = false;
    this.initChildItems();

  }

  initChildItems() {
    const contentLength = this.contentItems.toArray().length;


    this.childItems = this.contentItems.toArray().slice(1, contentLength);
    if (this.title === '1.1') {
      console.log(this.hasChildItem());
    }
    const length = this.childItems.length;
    for (let i = 0; i < length; i++) {
      this.childItems[i].setParent(this);
    }
  }


  hasChildItem() {
    if (this.childItems.length > 0) {
      return true;
    } else {
      return false;
    }
  }

  activateChildItem(childItem: MenuItemComponent) {
    if (isNullOrUndefined(this.parent.activeChildItem)) {
      this.parent.activeChildItem = childItem;
      this.parent.activeChildItem.activate();
    } else {
      this.parent.activeChildItem.deactivate();
      this.parent.activeChildItem = childItem;
      this.parent.activeChildItem.activate();
    }
  }

  deactivateChildItem(): boolean {
    if (this.childItems.length > 0) {
      const length = this.childItems.length;
      for (let i = 0; i < length; i++) {
        this.childItems[i].deactivate();
        this.childItems[i].deactivateChildItem();
      }
    } else {
      return true;
    }
  }

  activate() {
    this.active = true;
  }

  deactivate() {
    this.active = false;
  }

  onClick() {
    if (this.active) {
      if (this.parent instanceof MenuComponent) {
        this.parent.deactivateItem();
      }
      if (this.parent instanceof MenuItemComponent) {
        this.parent.deactivateChildItem();
      }
    } else {
      if (this.parent instanceof MenuComponent) {
        this.parent.activateItem(this);
      }
      if (this.parent instanceof MenuItemComponent) {
        this.parent.activateChildItem(this);
      }
    }
  }

  onMouseOut() {

  }

  onBlur() {
    // this.parent.deactivateChildItem();
  }

  isEntryItem(): boolean {
    if (this.parent instanceof MenuComponent) {
      return true;
    } else if (this.parent instanceof MenuItemComponent) {
      return false;
    } else {
      throw Error('Unknown parent of MenuItem');
    }
  }

  setParent(parent: any) {
    this.parent = parent;
  }
}
