import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  ElementRef,
  HostBinding,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  ViewEncapsulation
} from '@angular/core';
import {Widget} from '../core/widget';
import {PanelbarItemComponent} from './panelbar-item.component';


@Component({
  selector: 'ave-panelbar-header',
  templateUrl: 'panelbar-header.component.html',
  styleUrls: ['panelbar-header.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class PanelbarHeaderComponent extends Widget implements OnChanges,
  OnInit,
  DoCheck,
  AfterContentInit, AfterContentChecked,
  AfterViewInit, AfterViewChecked,
  OnDestroy {

  @Input() showArrow: boolean;
  @Input() expanded: boolean;

  @HostBinding('class.v-panelbar-header') 'true';
  @HostBinding('attr.tabindex') '-1';

  parentItem: PanelbarItemComponent;


  constructor(elementRef: ElementRef) {
    super(elementRef);

  }

  setParentItem(item: PanelbarItemComponent) {
    this.parentItem = item;
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
}
