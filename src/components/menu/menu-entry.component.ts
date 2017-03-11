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
import {MenuItemComponent} from "./menu-item.component";
import {MenuGroupComponent} from "./menu-group.component";

@Component({
  selector: 'ave-menu-entry',
  templateUrl: './menu-entry.component.html',
  styleUrls: ['./menu-entry.component.scss'],
  providers: [DomService]
})
export class MenuEntryComponent implements OnInit, AfterContentInit, AfterViewInit, AfterViewChecked {

  @Input() title: string;
  @ContentChildren(MenuGroupComponent) contentGroups: QueryList<MenuGroupComponent>;
  groups: MenuGroupComponent[];
  private expanded: boolean;

  constructor(private el: ElementRef, public dom: DomService,public render: Renderer) {
  }

  ngOnInit() {
  }
  ngAfterViewChecked() {
  }
  ngAfterViewInit() {

  }
  ngAfterContentInit() {
    this.initGroups();
  }
  initGroups() {
    this.groups = this.contentGroups.toArray();
  }
  hasGroup(): boolean {
    if (this.groups.length > 0) {
      return true;
    } else {
      return false;
    }
  }
  onClick() {
    this.expanded = !this.expanded;
  }
  onBlur() {
    this.expanded = false;
  }

}
