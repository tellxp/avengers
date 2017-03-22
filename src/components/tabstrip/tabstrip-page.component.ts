import {
  Component, OnInit, Input, AfterContentInit, trigger, transition, style, animate,
  ElementRef, DoCheck, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy, OnChanges
} from '@angular/core';
import {TabstripPanel} from './tabstrip-panel.component';
import {TabstripTab} from './tabstrip-tab.component';
import {Widget} from "../common/widget.component";
import {DomService} from "../common/dom.service";

@Component({
  selector: 'ave-tabstrip-page',
  templateUrl: './tabstrip-page.component.html',
  styleUrls: ['./tabstrip-page.component.scss'],
  host:{'[@fadeIn]': 'true'},
  animations: [
    trigger('fadeIn', [
      transition('void => *', [
        style({
          opacity: 0
        }),
        animate('1s ease')
      ]),
      transition('* => void', [
        animate('0s ease', style({
          opacity: 0
        }))
      ])
    ])
  ],
  providers: [DomService]
})
export class TabstripPage extends Widget implements OnChanges,
  OnInit,
  DoCheck,
  AfterContentInit, AfterContentChecked,
  AfterViewInit, AfterViewChecked,
  OnDestroy {

  private bindedTab: TabstripTab;

  private parentPanel: TabstripPanel;

  private active: boolean;

  constructor(elementRef: ElementRef, domService: DomService) {
    super(elementRef, domService);
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
    this.active = false;
  }

  activate() {
    this.active = true;
  }
  deactivate() {
    this.active = false;
  }
  public bindTab(tab: TabstripTab) {
    this.bindedTab = tab;
  }

  public setParentPanel(panel: TabstripPanel) {
    this.parentPanel = panel;
  }
}
