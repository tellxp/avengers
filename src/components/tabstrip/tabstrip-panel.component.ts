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
  Renderer2
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
  animations: [
    trigger('fadeDown', [
      state('expanded', style({
          opacity: 100
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

  @ContentChildren(TabstripPageComponent) private contentPages: QueryList<TabstripPageComponent>;
  private pages: TabstripPageComponent[];
  public activePage: TabstripPageComponent;

  private parentTabstrip: TabstripComponent;

  private bindedBar: TabstripBarComponent;

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

  @HostListener('@fadeDown.done') animationDone() {
    if (!this.expanded) {
      this.style.width = 0;
      this.style.height = 0;
      this.dom.setBindedElementStyle(this.style, this.render);
    }

    if (!this.docked) {
      this.style.width = 0;
      const positionType = PositioningType.Absolute;
      this.dom.setBindedElementPositioningType(positionType, this.render);
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

    this.init();
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


  init() {
    this.activePage = null;
    this.docked = false;
    this.state = 'collapsed';
    if (isNullOrUndefined(this.height)) {
      this.height = 60;
    }
  }

  public setParentTabstrip(tabstrip: TabstripComponent) {
    this.parentTabstrip = tabstrip;
  }

  public bindBar(bar: TabstripBarComponent) {
    this.bindedBar = bar;
  }

  private loadPages() {
    this.pages = this.contentPages.toArray();

    for (let i = 0; i < this.pages.length; i++) {
      this.pages[i].setParentPanel(this);
    }
  }

  public isExpanded() {
    if (this.expanded) {
      return true;
    } else {
      return false;
    }
  }

  dock() {
    const positionType = PositioningType.Static;
    this.dom.setBindedElementPositioningType(positionType, this.render);
    this.docked = true;
  }

  undock() {

    this.docked = false;
  }

  setPosition() {
    this.position = this.dom.getBindedElementPosition();
    this.position.left = this.bindedBar.dom.getBindedElementPosition().left;
    this.position.top = this.bindedBar.dom.getBindedElementPosition().top + this.bindedBar.dom.getBindedElementStyle().height;

    let positionType;
    if (this.docked) {
      positionType = PositioningType.Static;
    } else {
      positionType = PositioningType.Absolute;
    }
    this.dom.setBindedElementPositioningType(positionType, this.render);
    this.dom.setBindedElementPosition(this.position, this.render);
  }

  setStyle() {
    this.style.width = this.bindedBar.dom.getBindedElementStyle().width;
    this.style.height = this.height;
    this.dom.setBindedElementStyle(this.style, this.render);
  }

  public expand() {
    this.setStyle();
    this.setPosition();
    this.expanded = true;
    this.state = 'expanded';
  }

  public collapse() {
    this.expanded = false;
    this.state = 'collapsed';
  }
}
