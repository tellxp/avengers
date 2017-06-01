import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  ContentChild,
  DoCheck,
  ElementRef,
  HostBinding,
  HostListener,
  OnChanges,
  OnDestroy,
  OnInit, ViewEncapsulation
} from '@angular/core';
import {TabstripBarComponent} from './tabstrip-bar.component';
import {TabstripPanelComponent} from './tabstrip-panel.component';
import {WidgetComponent} from '../core/widget.component';
import {DomService} from '../core/dom.service';


@Component({
  selector: 'ave-tabstrip',
  templateUrl: './tabstrip.component.html',
  styleUrls: ['./tabstrip.component.scss'],
  encapsulation: ViewEncapsulation.None,

  providers: [DomService]
})
export class TabstripComponent extends WidgetComponent implements OnChanges,
  OnInit,
  DoCheck,
  AfterContentInit, AfterContentChecked,
  AfterViewInit, AfterViewChecked,
  OnDestroy {

  @ContentChild(TabstripBarComponent) private contentBar: TabstripBarComponent;
  @ContentChild(TabstripPanelComponent) private contentPanel: TabstripPanelComponent;

  @HostBinding('attr.tabindex') tabIndex = '-1';
  @HostBinding('class.v-tabstrip') tabstripCssClass = 'true';

  public id: string;
  private bar: TabstripBarComponent;
  private panel: TabstripPanelComponent;

  @HostListener('blur') onBlur() {
    if (!this.panel.docked) {
      this.panel.collapse();
    }
  }

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

