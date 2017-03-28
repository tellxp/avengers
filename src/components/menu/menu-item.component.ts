import {
  AfterContentChecked,
  AfterContentInit, AfterViewChecked, AfterViewInit, Component, ContentChildren, DoCheck, ElementRef, Input, OnChanges, OnDestroy, OnInit,
  QueryList
} from '@angular/core';
import {DomService} from '../common/dom.service';
import {PopupOrientation} from '../popup/popup.component';
import {isNullOrUndefined} from 'util';
import {MenuEntryComponent} from './menu-entry.component';
import {WidgetComponent} from '../common/widget.component';

@Component({
  selector: 'ave-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.scss'],
  providers: [DomService]
})
export class MenuItemComponent extends WidgetComponent implements OnChanges,
  OnInit,
  DoCheck,
  AfterContentInit, AfterContentChecked,
  AfterViewInit, AfterViewChecked,
  OnDestroy {

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
  setParent(parent: any) {
    this.parent = parent;
  }

  initChildItems() {
    let contentLength = this.contentItems.toArray().length;


    this.childItems = this.contentItems.toArray().slice(1, contentLength);
    // if (this.title == '1.1') {
    //   console.log(this.childItems);
    // }
    let length = this.childItems.length;
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
      let length = this.childItems.length;
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

  onMouseOver() {
    if (this.parent instanceof MenuEntryComponent) {
      this.parent.activateItem(this);
    }
    if (this.parent instanceof MenuItemComponent) {
      this.parent.activateChildItem(this);
    }
  }

  onMouseOut() {

  }

  onBlur() {

  }

}
