import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
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
import {MenuItemComponent} from './menu-item.component';
import {isNullOrUndefined} from 'util';
import {WidgetComponent} from '../common/widget.component';

@Component({
  selector: 'ave-menu-entry',
  templateUrl: './menu-entry.component.html',
  styleUrls: ['./menu-entry.component.scss'],
  providers: [DomService]
})
export class MenuEntryComponent extends WidgetComponent implements OnChanges,
  OnInit,
  DoCheck,
  AfterContentInit, AfterContentChecked,
  AfterViewInit, AfterViewChecked,
  OnDestroy {

  @Input() title: string;
  @ContentChildren(MenuItemComponent) contentItems: QueryList<MenuItemComponent>;
  items: MenuItemComponent[];
  activeItem: MenuItemComponent;
  public active: boolean;

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

    this.init();
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

  init() {
    this.items = this.contentItems.toArray();
    const length = this.contentItems.length;
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
    let length = this.items.length;
    for (let i = 0; i < length; i++) {
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
