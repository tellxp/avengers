import {
  Component,
  OnInit,
  ElementRef,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy, ViewEncapsulation
} from '@angular/core';
import {WidgetComponent} from '../core/widget.component';
import {DomService} from '../core/dom.service';

@Component({
  selector: 'ave-tabstrip-addon',
  templateUrl: './tabstrip-addon.component.html',
  styleUrls: ['./tabstrip-addon.component.scss'],
  encapsulation: ViewEncapsulation.None,

  providers: [DomService]
})
export class TabstripAddonComponent extends WidgetComponent implements OnChanges,
  OnInit,
  DoCheck,
  AfterContentInit, AfterContentChecked,
  AfterViewInit, AfterViewChecked,
  OnDestroy {
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
