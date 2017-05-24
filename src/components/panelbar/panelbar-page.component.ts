import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  ElementRef, HostBinding, Input,
  OnChanges,
  OnDestroy,
  OnInit,
  ViewEncapsulation
} from '@angular/core';
import {DomService} from '../core/dom.service';
import {WidgetComponent} from '../core/widget.component';


@Component({
  selector: 'ave-panelbar-page',
  templateUrl: 'panelbar-page.component.html',
  styleUrls: ['panelbar-page.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [DomService]
})
export class PanelbarPageComponent extends WidgetComponent implements OnChanges,
  OnInit,
  DoCheck,
  AfterContentInit, AfterContentChecked,
  AfterViewInit, AfterViewChecked,
  OnDestroy {

  @Input() motionState;
  @HostBinding('class.v-panelbar-page') panelbarPageClass = 'true';

  constructor(elementRef: ElementRef, domService: DomService) {
    super(elementRef, domService);
    this.motionState = 'none';
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
    this.motionState = 'end';
  }

}
