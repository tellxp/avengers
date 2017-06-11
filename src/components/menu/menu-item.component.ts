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

  parent: MenuEntryComponent | MenuItemComponent;

  childItems: MenuItemComponent[];
  activeChildItem: MenuItemComponent;
  active: boolean;
  orientation: PopupOrientation;

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
    this.loadChildItems();
  }

  loadChildItems() {
    const contentLength = this.contentItems.toArray().length;
    this.childItems = this.contentItems.toArray().slice(1, contentLength);
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

  activate() {
    this.active = true;
  }

  deactivate() {
    this.active = false;
  }

  onClick() {
    this.active = !this.active;
  }

  onMouseOut() {

  }

  onBlur() {
    // this.parent.deactivateChildItem();
  }

  setParent(parent: MenuEntryComponent | MenuItemComponent) {
    this.parent = parent;
  }
}
