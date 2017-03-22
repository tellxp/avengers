import {
  Component,
  Input,
  ContentChildren,
  QueryList,
  OnInit,
  AfterContentInit,
  trigger,
  transition,
  style,
  animate,
  ElementRef,
  Renderer,
  DoCheck,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnChanges,
  OnDestroy
} from "@angular/core";
import {TabstripPage} from "./tabstrip-page.component";
import {Tabstrip} from "./tabstrip.component";
import {TabstripBar} from "./tabstrip-bar.component";
import {Widget} from "../common/widget.component";
import {DomService, PositioningType} from "../common/dom.service";
import {isNullOrUndefined} from "util";


@Component({
  selector: 'ave-tabstrip-panel',
  templateUrl: './tabstrip-panel.component.html',
  styleUrls: ['./tabstrip-panel.component.scss'],
  animations: [
    trigger('fadeIn', [
      transition('void => *', [
        style({
          opacity: 0,
          height: 0
        }),
        animate('1s ease')
      ]),
      transition('* => void', [
        animate('1s ease', style({
          opacity: 0,
          height: 0
        }))
      ])
    ])
  ],
  providers: [DomService]
})
export class TabstripPanel extends Widget implements OnChanges,
  OnInit,
  DoCheck,
  AfterContentInit, AfterContentChecked,
  AfterViewInit, AfterViewChecked,
  OnDestroy {

  @Input() private height: number;
  @Input() private expanded: boolean;

  @ContentChildren(TabstripPage) private contentPages: QueryList<TabstripPage>;
  private pages: TabstripPage[];
  public activePage: TabstripPage;

  private parentTabstrip: Tabstrip;

  private _bindedBar: TabstripBar;

  private docked: boolean;

  public render: Renderer;


  constructor(elementRef: ElementRef, domService: DomService, renderer: Renderer) {
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

    if (isNullOrUndefined(this.height)) {
      this.height = 60;
    }
  }

  public setParentTabstrip(tabstrip: Tabstrip) {
    this.parentTabstrip = tabstrip;
  }

  public bindBar(bar: TabstripBar) {
    this._bindedBar = bar;
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
    let positionType = PositioningType.Relative;
    this.dom.setBindedElementPositioningType(positionType, this.render);
  }

  undock() {
    let positionType = PositioningType.Absolute;
    this.dom.setBindedElementPositioningType(positionType, this.render);
  }

  setPosition() {
    this.position = this.dom.getBindedElementPosition();
    this.position.left = this._bindedBar.dom.getBindedElementPosition().left;
    this.position.top = this._bindedBar.dom.getBindedElementPosition().top + this._bindedBar.dom.getBindedElementStyle().height;

    let positionType = PositioningType.Absolute;
    this.dom.setBindedElementPositioningType(positionType, this.render);
    this.dom.setBindedElementPosition(this.position, this.render);
  }

  setStyle() {
    this.style.width = this._bindedBar.dom.getBindedElementStyle().width;
    this.style.height = this.height;
    this.dom.setBindedElementStyle(this.style, this.render);
  }

  public expand() {
    this.setPosition();
    this.setStyle();
    this.expanded = true;
  }

  public collapse() {
    this.expanded = false;
  }
}
