import {
  Component,
  OnInit,
  AfterContentInit,
  ElementRef,
  OnChanges,
  DoCheck,
  AfterViewInit,
  OnDestroy,
  AfterContentChecked,
  AfterViewChecked
} from '@angular/core';
import {TabstripBarComponent} from './tabstrip-bar.component';
import {TabstripPanelComponent} from './tabstrip-panel.component';
import {WidgetComponent} from '../common/widget.component';
import {DomService} from '../common/dom.service';


@Component({
  selector: 'ave-tabstrip-toggle',
  templateUrl: './tabstrip-toggle.component.html',
  styleUrls: ['./tabstrip-toggle.component.scss'],
  providers: [DomService]
})
export class TabstripToggleComponent extends WidgetComponent implements OnChanges,
  OnInit,
  DoCheck,
  AfterContentInit, AfterContentChecked,
  AfterViewInit, AfterViewChecked,
  OnDestroy {

  private parentBar: TabstripBarComponent;

  private pairedPanel: TabstripPanelComponent;

  public expanded: boolean;


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
    this.expanded = false;
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


  constructor(elementRef: ElementRef, domService: DomService) {
    super(elementRef, domService);
  }

  public setParentBar(bar: TabstripBarComponent) {
    this.parentBar = bar;
  }

  public bindPanel(panel: TabstripPanelComponent) {
    this.pairedPanel = panel;
  }

  private togglePanel() {
    this.expanded = this.pairedPanel.isExpanded();
    if (this.expanded) {
      this.pairedPanel.collapse();
      this.expanded = false;

    } else {
      this.pairedPanel.expand();
      this.expanded = true;
    }

  }

  onToggleClick() {
    this.togglePanel();
  }
}
