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
} from "@angular/core";
import {TabstripBar} from "./tabstrip-bar.component";
import {TabstripPanel} from "./tabstrip-panel.component";
import {Widget} from "../common/widget.component";
import {DomService} from "../common/dom.service";


@Component({
  selector: 'ave-tabstrip-toggle',
  templateUrl: './tabstrip-toggle.component.html',
  styleUrls: ['./tabstrip-toggle.component.scss'],
  providers: [DomService]
})
export class TabstripToggle extends Widget implements OnChanges,
  OnInit,
  DoCheck,
  AfterContentInit, AfterContentChecked,
  AfterViewInit, AfterViewChecked,
  OnDestroy {

  private parentBar: TabstripBar;

  private pairedPanel: TabstripPanel;

  private expanded: boolean;


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

  public setParentBar(bar: TabstripBar) {
    this.parentBar = bar;
  }

  public bindPanel(panel: TabstripPanel) {
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
