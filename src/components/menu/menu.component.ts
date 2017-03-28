import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  ContentChildren,
  DoCheck,
  ElementRef,
  OnChanges,
  OnDestroy,
  OnInit,
  QueryList
} from '@angular/core';
import {MenuBarComponent} from './menu-bar.component';
import {WidgetComponent} from '../common/widget.component';
import {DomService} from '../common/dom.service';

@Component({
  selector: 'ave-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  providers: [DomService]
})
export class MenuComponent extends WidgetComponent implements OnChanges,
  OnInit,
  DoCheck,
  AfterContentInit, AfterContentChecked,
  AfterViewInit, AfterViewChecked,
  OnDestroy {

  @ContentChildren(MenuBarComponent) contentBars: QueryList<MenuBarComponent>;
  bars: MenuBarComponent[];

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

    this.initBars();
  }

  ngAfterContentChecked() {
    super.ngAfterContentChecked();
  }

  ngAfterViewInit() {
    super.ngAfterViewInit();
  }

  ngAfterViewChecked() {
    super.ngAfterViewInit();
  }

  ngOnDestroy() {
    super.ngOnDestroy();
  }

  initBars() {
    this.bars = this.contentBars.toArray();
    const length = this.bars.length;
    for (let i = 0; i < length; i++) {
      this.bars[i].setParentMenu(this);
    }
  }
}
