import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  ContentChildren,
  DoCheck,
  ElementRef, HostBinding,
  OnChanges,
  OnDestroy,
  OnInit,
  QueryList, ViewEncapsulation
} from '@angular/core';
import {WidgetComponent} from '../core/widget.component';
import {DomService} from '../core/dom.service';
import {MenuItemComponent} from './menu-item.component';
import {isNullOrUndefined} from 'util';

@Component({
  selector: 'ave-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  encapsulation: ViewEncapsulation.None,

  providers: [DomService]
})
export class MenuComponent extends WidgetComponent implements OnChanges,
  OnInit,
  DoCheck,
  AfterContentInit, AfterContentChecked,
  AfterViewInit, AfterViewChecked,
  OnDestroy {

  @HostBinding('class.v-menu') menuCssClass = 'true';
  @ContentChildren(MenuItemComponent) contentItems: QueryList<MenuItemComponent>;
  items: MenuItemComponent[];
  activeItem: MenuItemComponent;
  constructor(elementRef: ElementRef, domService: DomService) {
    super(elementRef, domService);

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

    this.initItems();
  }

  ngAfterContentChecked() {
    super.ngAfterContentChecked();
  }

  ngAfterViewInit() {
    super.ngAfterViewInit();
  }

  ngAfterViewChecked() {
    super.ngAfterViewInit();
  }

  ngOnDestroy() {
    super.ngOnDestroy();
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
    const length = this.items.length;
    for (let i = 0; i < length; i++) {
      this.items[i].deactivate();
      this.items[i].deactivateChildItem();

    }
  }

  initItems() {
    this.items = this.contentItems.toArray();
    const length = this.items.length;
    for (let i = 0; i < length; i++) {
      this.items[i].setParent(this);
    }
  }
}
