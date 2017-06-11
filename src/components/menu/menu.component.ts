import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  ContentChildren,
  DoCheck,
  ElementRef, HostBinding, HostListener,
  OnChanges,
  OnDestroy,
  OnInit,
  QueryList, ViewEncapsulation
} from '@angular/core';
import {WidgetComponent} from '../core/widget.component';
import {DomService} from '../core/dom.service';
import {MenuItemComponent} from './menu-item.component';
import {isNullOrUndefined} from 'util';
import {MenuEntryComponent} from './menu-entry.component';

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

  @HostBinding('class.v-menu') 'true';
  @HostBinding('attr.tabindex') '-1';
  @ContentChildren(MenuEntryComponent) contentEntries: QueryList<MenuEntryComponent>;
  entries: MenuEntryComponent[];
  activeEnrty: MenuEntryComponent;

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
    this.loadEntries();
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

  loadEntries() {
    this.entries = this.contentEntries.toArray();
    const length = this.entries.length;
    for (let i = 0; i < length; i++) {
      this.entries[i].setParentMenu(this);
    }
  }
}
