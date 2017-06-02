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
  HostListener,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  QueryList,
  Renderer2, ViewEncapsulation
} from '@angular/core';
import {TabstripPageComponent} from './tabstrip-page.component';
import {TabstripComponent} from './tabstrip.component';
import {TabstripBarComponent} from './tabstrip-bar.component';
import {WidgetComponent} from '../core/widget.component';
import {DomService, PositioningType} from '../core/dom.service';
import {isNullOrUndefined} from 'util';
import {animate, state, style, transition, trigger} from '@angular/animations';


@Component({
  selector: 'ave-tabstrip-panel',
  templateUrl: './tabstrip-panel.component.html',
  styleUrls: ['./tabstrip-panel.component.scss'],
  encapsulation: ViewEncapsulation.None,

  animations: [
    trigger('fadeDown', [
      state('expanded', style({
          opacity: 1
        })
      ),
      state('collapsed', style({
          opacity: 0
        })
      ),
      transition('collapsed => expanded', [
        style({
          opacity: 0,
          height: 0
        }),
        animate('1s ease')
      ]),
      transition('expanded => collapsed', [
        animate('1s ease', style({
          opacity: 0,
          height: 0
        }))
      ])
    ])
  ],
  providers: [DomService]
})
export class TabstripPanelComponent extends WidgetComponent implements OnChanges,
  OnInit,
  DoCheck,
  AfterContentInit, AfterContentChecked,
  AfterViewInit, AfterViewChecked,
  OnDestroy {

  @Input() public height: number;
  @Input() public expanded: boolean;

  @HostBinding('class.v-tabstrip-panel') tabstripPanelCssClass = 'true';

  @ContentChildren(TabstripPageComponent) private contentPages: QueryList<TabstripPageComponent>;


  public docked: boolean;

  public render: Renderer2;

  public state: string;

  @HostBinding('@fadeDown') get fadeDown() {
    return this.state;
  }

  @HostListener('@fadeDown.start') animationStart() {
    if (!this.expanded) {

    }
  }


  constructor(elementRef: ElementRef, domService: DomService, renderer: Renderer2) {
    super(elementRef, domService);

    this.render = renderer;
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
