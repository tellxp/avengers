import {
  Component,
  OnInit,
  AfterContentInit,
  Input,
  ElementRef,
  ContentChildren,
  QueryList,
  AfterViewInit,
  AfterViewChecked,
  Renderer
} from '@angular/core';
import {DomService} from '../common/dom.service';
import {MenuItemComponent} from './menu-item.component';
import {isNullOrUndefined} from 'util';

@Component({
  selector: 'ave-menu-entry',
  templateUrl: './menu-entry.component.html',
  styleUrls: ['./menu-entry.component.scss'],
  providers: [DomService]
})
export class MenuEntryComponent implements OnInit, AfterContentInit, AfterViewInit, AfterViewChecked {

  @Input() title: string;
  @ContentChildren(MenuItemComponent) contentItems: QueryList<MenuItemComponent>;
  items: MenuItemComponent[];
  activeItem: MenuItemComponent;
  public active: boolean;

  constructor(private el: ElementRef, public dom: DomService,public render: Renderer) {
  }

  ngOnInit() {
  }
  ngAfterViewChecked() {
  }
  ngAfterViewInit() {

  }
  ngAfterContentInit() {
    this.initItems();
  }
  initItems() {
    this.items = this.contentItems.toArray();
    let length = this.contentItems.length;
    for (let i = 0; i < length; i++) {
      this.items[i].setParent(this);
    }
  }
  hasItem(): boolean {
    if (this.items.length > 0) {
      return true;
    } else {
      return false;
    }
  }
  activateItem(item: MenuItemComponent) {
    if (isNullOrUndefined(this.activeItem)) {
      this.activeItem = item;
      this.activeItem.activate();
    } else {
      this.activeItem.deactivate();
      this.activeItem = item;
      this.activeItem.activate();
    }
  }
  deactivateItem() {
    let length = this.items.length;
    for (let i=0; i<length; i++) {
      this.items[i].deactivate();
      this.items[i].deactivateChildItem();

    }
  }
  onClick() {
    this.active = !this.active;
  }
  onBlur() {
    this.active = false;
    this.deactivateItem();
  }

}
