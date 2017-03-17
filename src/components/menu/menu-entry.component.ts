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
} from "@angular/core";
import {DomService} from "../common/dom.service";
import {MenuItem} from "./menu-item.component";
import {MenuGroup} from "../megamenu/megamenu-group.component";
import {isNullOrUndefined} from "util";

@Component({
  selector: 'ave-menu-entry',
  templateUrl: './menu-entry.component.html',
  styleUrls: ['./menu-entry.component.scss'],
  providers: [DomService]
})
export class MenuEntry implements OnInit, AfterContentInit, AfterViewInit, AfterViewChecked {

  @Input() title: string;
  @ContentChildren(MenuItem) contentItems: QueryList<MenuItem>;
  items: MenuItem[];
  activeItem: MenuItem;
  private active: boolean;

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
  activateItem(item: MenuItem) {
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
