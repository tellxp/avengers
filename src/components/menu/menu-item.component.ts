import {
  Component, OnInit, Input, ElementRef, AfterViewInit, ContentChildren, QueryList,
  AfterContentInit
} from '@angular/core';
import {DomService} from "../common/dom.service";
import {isNullOrUndefined} from "util";

@Component({
  selector: 'ave-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.scss'],
  providers: [DomService]
})
export class MenuItem implements OnInit, AfterContentInit,AfterViewInit {
  @Input() title: string;
  private items: MenuItem[];
  @ContentChildren(MenuItem) private contentItems: QueryList<MenuItem>;
  public domService: DomService;
  private expanded: boolean;

  constructor(el: ElementRef, dom: DomService) {
    this.domService = dom;
    this.domService.loadElement(el);
  }

  ngAfterContentInit() {
    this.items = this.contentItems.toArray();
    console.log(this.items);
  }

  ngAfterViewInit() {
  }
  hasItems():boolean {
    if (isNullOrUndefined(this.items)) {
      return false;
    } else {
      return true;
    }
  }
  onClick() {
    this.expanded = !this.expanded;
  }
  ngOnInit() {
  }
}
