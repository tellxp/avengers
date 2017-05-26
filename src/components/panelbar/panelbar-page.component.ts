import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit, ChangeDetectorRef,
  Component,
  DoCheck,
  ElementRef,
  HostBinding,
  HostListener,
  Input,
  OnChanges,
  OnDestroy,
  OnInit, Renderer2, ViewChild,
  ViewEncapsulation
} from '@angular/core';
import {DomService} from '../core/dom.service';
import {WidgetComponent, WidgetStyle} from '../core/widget.component';
import {Subject} from 'rxjs/Subject';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';


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

  @HostBinding('class.v-panelbar-page') panelbarPageClass = 'true';

  @HostListener('click') onClick() {

  }

  constructor(elementRef: ElementRef, domService: DomService, private render: Renderer2, private detector: ChangeDetectorRef) {
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
