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
import {WidgetComponent} from '../core/widget.component';
import {DomService} from '../core/dom.service';


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

  private attachedPanel: TabstripPanelComponent;

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


  constructor(elementRef: ElementRef, domService: DomService) {
    super(elementRef, domService);
  }

  public setParentBar(bar: TabstripBarComponent) {
    this.parentBar = bar;
  }

  public bindPanel(panel: TabstripPanelComponent) {
    this.attachedPanel = panel;
  }

  private togglePanel() {
    if (this.attachedPanel.docked) {
      this.attachedPanel.undock();
      this.attachedPanel.collapse();
    } else {
      this.attachedPanel.dock();
      this.attachedPanel.expand();
    }
  }

  onClick() {
    this.togglePanel();
  }
}
