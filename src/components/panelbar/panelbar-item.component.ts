import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  ContentChild,
  ContentChildren,
  DoCheck,
  ElementRef,
  HostBinding,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  QueryList,
  ViewChild
} from '@angular/core';
import {Widget} from '../core/widget';
import {PanelbarContentComponent} from './panelbar-content.component';
import {PanelbarHeaderComponent} from './panelbar-header.component';
import {expandAnimations} from '../animation/expand-animations';
import {PanelbarComponent} from './panelbar.component';


@Component({
  selector: 'ave-panelbar-item',
  templateUrl: 'panelbar-item.component.html',
  styleUrls: ['panelbar-item.component.scss'],
  animations: [expandAnimations],
})
export class PanelbarItemComponent extends Widget implements OnChanges,
  OnInit,
  DoCheck,
  AfterContentInit, AfterContentChecked,
  AfterViewInit, AfterViewChecked,
  OnDestroy {

  @Input() title: string;
  @ContentChildren(PanelbarItemComponent) contentItems: QueryList<PanelbarItemComponent>;
  @ContentChild(PanelbarContentComponent) container;
  @ViewChild(PanelbarHeaderComponent) viewHeader;

  parentPanelbar: PanelbarComponent;
  header: PanelbarHeaderComponent;
  parentItem: PanelbarItemComponent;
  childItems: PanelbarItemComponent[];

  @Input() expanded: boolean;
  @Input() active: boolean;

  @HostBinding('class.v-panelbar-item') panelbarItemClass = 'true';

  onHeaderClick() {
    this.toggleItemExpand();
    this.parentPanelbar.activateItem(this);
  }

  constructor(elementRef: ElementRef) {
    super(elementRef);
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

  }

  ngAfterContentChecked() {
    super.ngAfterContentChecked();
  }

  ngAfterViewInit() {
    super.ngAfterViewInit();
  }

  ngAfterViewChecked() {
    super.ngAfterViewChecked();

  }

  ngOnDestroy() {
    super.ngOnDestroy();
  }

  setParentPanelbar(panelbar: PanelbarComponent) {
    this.parentPanelbar = panelbar;
  }

  loadChildItems() {
    const contentItemsLength = this.contentItems.toArray().length;
    this.childItems = this.contentItems.toArray().slice(1, contentItemsLength);
    const length = this.childItems.length;
    if (this.hasChildItem()) {

      for (let i = 0; i < length; i++) {
        this.childItems[i].setParentPanelbar(this.parentPanelbar);
        if (this.childItems[i].active) {
          this.parentPanelbar.activateItem(this.childItems[i]);
        }
        this.childItems[i].setParentItem(this);
        this.childItems[i].loadChildItems();

      }
    }
  }

  setParentItem(item: PanelbarItemComponent) {
    this.parentItem = item;
  }

  hasChildItem() {
    return this.childItems.length > 0;
  }

  loadHeader() {
    this.header = this.viewHeader;
    this.header.setParentItem(this);
  }

  activate() {
    this.active = true;
  }

  deactivate() {
    this.active = false;
  }

  toggleItemExpand() {
    this.expanded = !this.expanded;
  }
}
