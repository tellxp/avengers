import {
  Component,
  OnInit,
  Input,
  ElementRef,
  AfterViewInit,
  ContentChildren,
  QueryList,
  AfterContentInit
} from "@angular/core";
import {DomService} from "../common/dom.service";
import {PopupOrientation} from "../popup/popup.component";
import {isNullOrUndefined} from "util";
import {MenuEntry} from "./menu-entry.component";

@Component({
  selector: 'ave-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.scss'],
  providers: [DomService]
})
export class MenuItem implements OnInit, AfterContentInit, AfterViewInit {
  @Input() title: string;
  @ContentChildren(MenuItem) contentItems: QueryList<MenuItem>;

  parent: any;

  childItems: MenuItem[];
  activeChildItem: MenuItem;
  active: boolean;
  orientation: PopupOrientation;
  public domService: DomService;

  constructor(el: ElementRef, dom: DomService) {
    this.orientation = PopupOrientation.Right;
    this.active = false;
    this.domService = dom;
  }

  setParent(parent: any) {
    this.parent = parent;
  }
  ngAfterContentInit() {
    this.initChildItems();
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

  ngAfterViewInit() {
  }

  hasChildItem() {
    if (this.childItems.length > 0) {
      return true;
    } else {
      return false;
    }
  }

  activateChildItem(childItem: MenuItem) {
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
    if (this.parent instanceof MenuEntry) {
      this.parent.activateItem(this);
    }
    if (this.parent instanceof MenuItem) {
      this.parent.activateChildItem(this);
    }
  }

  onMouseOut() {

  }
  onBlur() {

  }
  ngOnInit() {
  }
}
