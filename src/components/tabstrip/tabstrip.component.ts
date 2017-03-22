import {
  Component,
  OnInit,
  AfterContentInit,
  ContentChild,
  ElementRef,
  OnChanges,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  DoCheck,
  OnDestroy
} from "@angular/core";
import {TabstripBar} from "./tabstrip-bar.component";
import {TabstripPanel} from "./tabstrip-panel.component";
import {Widget} from "../common/widget.component";
import {DomService} from "../common/dom.service";


@Component({
  selector: 'ave-tabstrip',
  templateUrl: './tabstrip.component.html',
  styleUrls: ['./tabstrip.component.scss'],
  providers: [DomService]
})
export class Tabstrip extends Widget implements OnChanges,
  OnInit,
  DoCheck,
  AfterContentInit, AfterContentChecked,
  AfterViewInit, AfterViewChecked,
  OnDestroy {

  @ContentChild(TabstripBar) private contentBar: TabstripBar;
  @ContentChild(TabstripPanel) private contentPanel: TabstripPanel;

  private bar: TabstripBar;
  private panel: TabstripPanel;

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
    this.init();
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

  private init() {
    this.loadBar();
    this.loadPanel();
    this.bindBarAndPanel();
  }

  private loadBar() {
    this.bar = this.contentBar;
    this.bar.setParentTabstrip(this);
  }

  private loadPanel() {
    this.panel = this.contentPanel;
    this.panel.setParentTabstrip(this);
  }

  private bindBarAndPanel() {
    this.bar.attachPanel(this.panel);
    this.bar.attachPanelToTab(this.panel);
    this.bar.attachPanelToToggle(this.panel);

    this.panel.bindBar(this.bar);

    this.bar.setDefaultActiveTab();
  }

}

