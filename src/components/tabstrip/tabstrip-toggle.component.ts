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
  AfterViewChecked, ViewEncapsulation, HostBinding
} from '@angular/core';
import {TabstripBarComponent} from './tabstrip-bar.component';
import {TabstripPanelComponent} from './tabstrip-panel.component';
import {WidgetComponent} from '../core/widget.component';
import {DomService} from '../core/dom.service';


@Component({
  selector: 'ave-tabstrip-toggle',
  templateUrl: './tabstrip-toggle.component.html',
  styleUrls: ['./tabstrip-toggle.component.scss'],
  encapsulation: ViewEncapsulation.None,

  providers: [DomService]
})
export class TabstripToggleComponent extends WidgetComponent implements OnChanges,
  OnInit,
  DoCheck,
  AfterContentInit, AfterContentChecked,
  AfterViewInit, AfterViewChecked,
  OnDestroy {

  @HostBinding('class.v-tabstrip-toggle') 'true';

  private parentBar: TabstripBarComponent;

  public attachedPanel: TabstripPanelComponent;

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


  onClick() {
  }
}
