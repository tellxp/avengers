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
import {DomService} from '../core/dom.service';
import {WidgetComponent} from '../core/widget.component';
import {animate, state, style, transition, trigger} from '@angular/animations';


@Component({
  selector: 'ave-slidedown',
  templateUrl: 'slidedown.component.html',
  styleUrls: ['./slidedown.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: [
    trigger('slideDown', [
      state('in', style({
        height: '*',
      })),
      transition('void => *', [
        style({
          overflow: 'hidden',
          height: '0'
        }),
        animate('280ms cubic-bezier(0,0,0.2,1)', style({
          height: '*'
        }))
      ]),
      transition('* => void', [
        style({
          overflow: 'visible',
          height: '*'
        }),
        animate('280ms cubic-bezier(0,0,0.2,1)', style({
          height: 0
        }))
      ])
    ]),
  ],
  providers: [DomService]
})
export class SlideDownComponent extends WidgetComponent implements OnChanges,
  OnInit,
  DoCheck,
  AfterContentInit, AfterContentChecked,
  AfterViewInit, AfterViewChecked,
  OnDestroy {

  @HostBinding('class.v-slidedown') slideDownCssClass = 'true';
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
