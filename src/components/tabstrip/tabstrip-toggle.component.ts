import {Component, Input, Output, EventEmitter, OnInit, AfterContentInit, ElementRef} from '@angular/core';
import {TabstripBar} from './tabstrip-bar.component';
import {TabstripPanel} from './tabstrip-panel.component';
import {Widget} from "../common/widget.component";
import {DomService} from "../common/dom.service";


@Component({
  selector: 'ave-tabstrip-toggle',
  templateUrl: './tabstrip-toggle.component.html',
  styleUrls: ['./tabstrip-toggle.component.scss'],
  providers: [DomService]
})
export class TabstripToggle extends Widget implements OnInit, AfterContentInit {


  private parentBar: TabstripBar;

  private pairedPanel: TabstripPanel;

  private expanded: boolean;

  ngOnInit() {

  }

  ngAfterContentInit() {
    this.expanded = false;
  }

  constructor(elementRef: ElementRef, domService: DomService) {
    super(elementRef, domService);
  }

  public setParent(bar: TabstripBar) {
    this.parentBar = bar;
  }
  public setPairedPanel(panel: TabstripPanel) {
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
