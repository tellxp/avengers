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
import {Widget} from '../core/widget';
import {Dom} from '../core/dom';


@Component({
  selector: 'ave-tabstrip-toggle',
  templateUrl: './tabstrip-toggle.component.html',
  styleUrls: ['./tabstrip-toggle.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class TabstripToggleComponent extends Widget implements OnChanges,
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


  constructor(elementRef: ElementRef) {
    super(elementRef);
  }


  onClick() {
  }
}
