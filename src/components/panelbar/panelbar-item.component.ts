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
import {DomService} from '../core/dom.service';
import {WidgetComponent} from '../core/widget.component';
import {PanelbarContentComponent} from './panelbar-content.component';
import {PanelbarHeaderComponent} from './panelbar-header.component';


@Component({
  selector: 'ave-panelbar-item',
  templateUrl: 'panelbar-item.component.html',
  styleUrls: ['panelbar-item.component.scss'],
  providers: [DomService]
})
export class PanelbarItemComponent extends WidgetComponent implements OnChanges,
  OnInit,
  DoCheck,
  AfterContentInit, AfterContentChecked,
  AfterViewInit, AfterViewChecked,
  OnDestroy {

  @Input() title: string;
  @ContentChildren(PanelbarItemComponent) contentItems: QueryList<PanelbarItemComponent>;
  @ContentChild(PanelbarContentComponent) container;
  @ViewChild(PanelbarHeaderComponent) viewHeader;

  header: PanelbarHeaderComponent;
  parentItem: PanelbarItemComponent;
  childItems: PanelbarItemComponent[];
  expanded: boolean;

  @HostBinding('class.v-panelbar-item') panelbarItemClass = 'true';

  onClick() {
    this.toggleItem();
  }

  constructor(elementRef: ElementRef, domService: DomService) {
    super(elementRef, domService);
    this.expanded = false;
  }

  ngOnChanges() {
    super.ngOnChanges();
  }

  ngOnInit() {
    super.ngOnInit();
    this.init();
  }

  ngDoCheck() {
    super.ngDoCheck();
  }

  ngAfterContentInit() {
    super.ngAfterContentInit();

    this.initChildItems();
  }

  ngAfterContentChecked() {
    super.ngAfterContentChecked();
  }

  ngAfterViewInit() {
    super.ngAfterViewInit();

    this.loadHeader();

  }

  ngAfterViewChecked() {
    super.ngAfterViewChecked();

  }

  ngOnDestroy() {
    super.ngOnDestroy();
  }

  init() {
    this.expanded = false;
  }

  initChildItems() {
    const contentItemsLength = this.contentItems.toArray().length;
    this.childItems = this.contentItems.toArray().slice(1, contentItemsLength);
    const length = this.childItems.length;
    for (let i = 0; i < length; i++) {
      this.childItems[i].setParentItem(this);
    }
  }

  setParentItem(item: PanelbarItemComponent) {
    this.parentItem = item;
  }

  hasChildItem() {
    if (this.childItems.length > 0) {
      return true;
    } else {
      return false;
    }
  }

  loadHeader() {
    this.header = this.viewHeader;
    this.header.setParentItem(this);
  }
  toggleItem() {
    this.expanded = !this.expanded;
  }

}
