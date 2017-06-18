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
  Renderer2,
  ViewEncapsulation
} from '@angular/core';
import {TabstripPageComponent} from './tabstrip-page.component';
import {Widget} from '../core/widget';


@Component({
  selector: 'ave-tabstrip-panel',
  templateUrl: './tabstrip-panel.component.html',
  styleUrls: ['./tabstrip-panel.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TabstripPanelComponent extends Widget implements OnChanges,
  OnInit,
  DoCheck,
  AfterContentInit, AfterContentChecked,
  AfterViewInit, AfterViewChecked,
  OnDestroy {

  @Input() public height: number;
  @Input() public expanded: boolean;

  @HostBinding('class.v-tabstrip-panel')

  @ContentChildren(TabstripPageComponent) private contentPages: QueryList<TabstripPageComponent>;

  pages: TabstripPageComponent[];

  public docked: boolean;

  public render: Renderer2;

  public state: string;



  constructor(elementRef: ElementRef, renderer: Renderer2) {
    super(elementRef);

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
    this.loadPages();
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

  loadPages() {
    this.pages = this.contentPages.toArray();
  }

}
