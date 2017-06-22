import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  ContentChildren,
  DoCheck,
  ElementRef,
  HostBinding,
  OnChanges,
  OnDestroy,
  OnInit,
  QueryList,
  ViewEncapsulation
} from '@angular/core';
import {Widget} from '../core/widget';
import {PanelbarItemComponent} from './panelbar-item.component';
import {isNullOrUndefined} from 'util';


@Component({
  selector: 'ave-panelbar',
  templateUrl: 'panelbar.component.html',
  styleUrls: ['panelbar.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PanelbarComponent extends Widget implements OnChanges,
  OnInit,
  DoCheck,
  AfterContentInit, AfterContentChecked,
  AfterViewInit, AfterViewChecked,
  OnDestroy {

  activeItem: PanelbarItemComponent;

  @HostBinding('class.v-panelbar') 'true';
  @ContentChildren(PanelbarItemComponent) contentItems: QueryList<PanelbarItemComponent>;

  rootItems: PanelbarItemComponent[];

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
    this.loadRootItems();
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

  activateItem(item: PanelbarItemComponent) {
    if (!isNullOrUndefined(this.activeItem)) {
      this.activeItem.deactivate();
    }
    this.activeItem = item;
    this.activeItem.activate();
  }

  loadRootItems() {
    this.rootItems = this.contentItems.toArray();

    const length = this.rootItems.length;
    for (let i = 0; i < length; i++) {
      this.rootItems[i].setParentPanelbar(this);
      // if (this.rootItems[i].active) {
      //   this.activateItem(this.rootItems[i]);
      // }
      this.rootItems[i].loadChildItems();
    }
  }
}
