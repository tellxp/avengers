import {
  Component, Input, ContentChildren, QueryList, OnInit, AfterContentInit, trigger,
  transition, style, animate
} from '@angular/core';
import {TabstripPage} from "./tabstrip-page.component";
import {isNullOrUndefined} from "util";
import {Tabstrip} from "./tabstrip.component";
import {TabstripBar} from "./tabstrip-bar.component";


@Component({
  selector: 'ave-tabstrip-panel',
  templateUrl: './tabstrip-panel.component.html',
  styleUrls: ['./tabstrip-panel.component.scss'],
  animations: [
    trigger('fadeIn', [
      transition('void => *', [
        style({
          opacity: 0,
          height:0
        }),
        animate('1s ease')
      ]),
      transition('* => void', [
        animate('1s ease', style({
          opacity: 0,
          height:0
        }))
      ])
    ])
  ]
})
export class TabstripPanel implements OnInit, AfterContentInit {

  private _pairedBar: TabstripBar;

  @Input() private expanded: boolean;

  private parentTabstrip: Tabstrip;

  @ContentChildren(TabstripPage) private contentPages: QueryList<TabstripPage>;

  private pages: TabstripPage[];

  private activePage: TabstripPage;

  constructor() {
    this.expanded = false;
    this.activePage = null;
  }
  ngOnInit() {

  }
  ngAfterContentInit() {
    this.loadPages();
  }

  private loadPages() {
    this.pages = this.contentPages.toArray();
    if (isNullOrUndefined(this.pages)) {
      throw new Error("pages is null or undefined");
    } else {
      for (let i = 0; i < this.pages.length; i++) {
        this.pages[i].setParentPanel(this);
      }
    }
  }

  public setPairedBar(bar: TabstripBar) {
    this._pairedBar = bar;
  }

  public attachToTabstrip(tabstrip: Tabstrip) {
    this.parentTabstrip = tabstrip;
  }

  public isExpanded() {
    if (this.expanded) {
      return true;
    } else {
      return false;
    }
  }

  public expand() {
    this.expanded = true;
  }

  public collapse() {
    this.expanded = false;
  }



}
