import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component, ContentChild,
  ContentChildren,
  DoCheck,
  ElementRef,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  QueryList
} from '@angular/core';
import {DomService} from '../common/dom.service';
import {WidgetComponent} from '../common/widget.component';
import {PanelbarContentComponent} from './panelbar-content.component';
import {PanelAlignmentType} from '../panel/panel.component';


@Component({
  selector: 'ave-panelbar-item',
  templateUrl: './panelbar-item.component.html',
  styleUrls: ['./panelbar-item.component.scss'],
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
  itemAlignment: PanelAlignmentType;
  parentItem: PanelbarItemComponent;
  childItems: PanelbarItemComponent[];
  active: boolean;

  constructor(elementRef: ElementRef, domService: DomService) {
    super(elementRef, domService);
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
  }

  ngAfterViewChecked() {
    super.ngAfterViewChecked();
  }

  ngOnDestroy() {
    super.ngOnDestroy();
  }
  init() {
    this.active = false;
    this.itemAlignment = PanelAlignmentType.Stack;
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
  toggleItem() {
    this.active = !this.active;
  }
  onClick() {
    this.toggleItem();
  }
}
