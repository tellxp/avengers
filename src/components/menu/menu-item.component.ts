import {
  Component,
  OnInit,
  Input,
  ElementRef,
  AfterViewInit,
  ContentChildren,
  QueryList,
  AfterContentInit, ContentChild
} from "@angular/core";
import {DomService} from "../common/dom.service";
import {PopupOrientation} from "../popup/popup.component";
import {MenuGroupComponent} from "./menu-group.component";
import {MenuPanelComponent} from "./menu-panel.component";
import {isNullOrUndefined} from "util";

@Component({
  selector: 'ave-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.scss'],
  providers: [DomService]
})
export class MenuItemComponent implements OnInit, AfterContentInit, AfterViewInit {
  @Input() title: string;
  @ContentChild(MenuPanelComponent) contentPanel;
  expanded: boolean;
  panel: MenuGroupComponent[];
  orientation: PopupOrientation;
  public domService: DomService;

  constructor(el: ElementRef, dom: DomService) {
    this.orientation = PopupOrientation.Right;
    this.expanded = false;
    this.domService = dom;
  }

  ngAfterContentInit() {
    this.initGroups();
  }

  initGroups() {
    this.panel = this.contentPanel;
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
