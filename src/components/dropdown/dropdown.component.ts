import {
  AfterContentChecked,
  AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, ElementRef, Input, OnChanges, OnDestroy,
  OnInit
} from '@angular/core';
import {DomService} from '../core/dom.service';
import {WidgetComponent} from '../core/widget.component';

@Component({
  selector: 'ave-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss'],
  providers: [DomService]
})
export class DropdownComponent extends WidgetComponent implements OnChanges,
  OnInit,
  DoCheck,
  AfterContentInit, AfterContentChecked,
  AfterViewInit, AfterViewChecked,
  OnDestroy {

  @Input() title: string;
  @Input() expanded: boolean;

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

  onClick() {
    this.expanded = !this.expanded;
  }

  onBlur() {
    // this.active = false;
  }
}
