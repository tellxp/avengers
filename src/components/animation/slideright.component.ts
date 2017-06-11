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
  selector: 'ave-slideright',
  templateUrl: 'slideright.component.html',
  styleUrls: ['./slideright.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: [
    trigger('slideRight', [
      state('in', style({width: '*'})),
      transition('void => *', [
        style({
          transform: 'translateX(-100%)',
          opacity: '0',
        }),
        animate('560ms cubic-bezier(0,0,0.2,1)',
          style({
            opacity: '1',
            transform: 'translateX(0%)',

          }))
      ]),
      transition('* => void', [
        style({
          opacity: '1',
          transform: 'translateX(0%)'
        }),
        animate('560ms cubic-bezier(0,0,0.2,1)',
          style({
            opacity: 0,
            transform: 'translateX(100%)'
          }))
      ])
    ]),
  ],
  providers: [DomService]
})
export class SlideRightComponent extends WidgetComponent implements OnChanges,
  OnInit,
  DoCheck,
  AfterContentInit, AfterContentChecked,
  AfterViewInit, AfterViewChecked,
  OnDestroy {

  @HostBinding('class.v-slideright') 'true';

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
