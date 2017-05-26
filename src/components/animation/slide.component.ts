import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  ElementRef, HostBinding,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  ViewEncapsulation
} from '@angular/core';
import {DomService} from '../core/dom.service';
import {WidgetComponent} from '../core/widget.component';
import {animate, state, style, transition, trigger} from '@angular/animations';


@Component({
  selector: 'ave-slide',
  templateUrl: 'slide.component.html',
  styleUrls: ['slide.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: [
    trigger('slideDown', [

      state('in', style({height: '*'})),
      transition('void => *', [
        style({height: '0'}),
        animate('1s ease', style({height: '*'}))
      ]),
      transition('* => void', [
        style({height: '*'}),
        animate('1s ease', style({height: 0}))
      ])
    ]),
    trigger('slideUp', [
      state('in', style({height: '*'})),
      transition('void => *', [
        style({height: '0'}),
        animate('1s ease', style({height: '*'}))
      ]),
      transition('* => void', [
        style({height: '*'}),
        animate('1s ease', style({height: 0}))
      ])
    ]),
  ],
  providers: [DomService]
})
export class ExpandComponent extends WidgetComponent implements OnChanges,
  OnInit,
  DoCheck,
  AfterContentInit, AfterContentChecked,
  AfterViewInit, AfterViewChecked,
  OnDestroy {

  @Input() active: boolean;
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
