import {
  Component,
  OnInit,
  Input,
  ElementRef,
  AfterViewInit,
  ContentChildren,
  QueryList,
  AfterContentInit, ContentChild, ViewChildren, ViewChild
} from "@angular/core";
import {DomService} from "../common/dom.service";
import {PopupOrientation} from "../popup/popup.component";
import {MenuGroup} from "./menu-group.component";
import {MenuPanel} from "./menu-panel.component";
import {isNullOrUndefined} from "util";

@Component({
  selector: 'ave-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.scss'],
  providers: [DomService]
})
export class MenuItem implements OnInit, AfterContentInit, AfterViewInit {
  @Input() title: string;
  @ContentChildren(MenuItem) contentItems: QueryList<MenuItem>;
  @ViewChild(MenuPanel) viewPanel: QueryList<MenuPanel>;

  expanded: boolean;
  panel: MenuPanel;
  orientation: PopupOrientation;
  public domService: DomService;

  constructor(el: ElementRef, dom: DomService) {
    this.orientation = PopupOrientation.Right;
    this.expanded = false;
    this.domService = dom;
  }

  ngAfterContentInit() {
  }


  hasGroup(): boolean {
    if (isNullOrUndefined(this.panel)) {
      return false;
    } else {
      return true;
    }
  }

  ngAfterViewInit() {

  }

  onMouseOver() {
    this.expanded = true;
  }

  onMouseOut() {
    this.expanded = false;
  }

  ngOnInit() {
  }
}
