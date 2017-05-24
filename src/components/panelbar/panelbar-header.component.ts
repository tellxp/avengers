import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  ElementRef, HostBinding,
  OnChanges,
  OnDestroy,
  OnInit,
  ViewEncapsulation
} from '@angular/core';
import {DomService} from '../core/dom.service';
import {WidgetComponent} from '../core/widget.component';


@Component({
  selector: 'ave-panelbar-header',
  templateUrl: 'panelbar-header.component.html',
  styleUrls: ['panelbar-header.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [DomService]
})
export class PanelbarHeaderComponent extends WidgetComponent implements OnChanges,
  OnInit,
  DoCheck,
  AfterContentInit, AfterContentChecked,
  AfterViewInit, AfterViewChecked,
  OnDestroy {
  @HostBinding('class.v-panelbar-header') panelbarHeaderClass = 'true';
  @HostBinding('attr.tabindex') tabIndex = '-1';

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
