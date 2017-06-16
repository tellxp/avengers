import {
  AfterContentChecked,
  AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, ElementRef, HostBinding, Input, OnChanges, OnDestroy,
  OnInit, ViewEncapsulation
} from '@angular/core';
import {Dom} from '../core/dom';
import {Widget} from '../core/widget';
import {expandAnimations} from '../animation/expand-animations';

@Component({
  selector: 'ave-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss'],
  animations: [expandAnimations],
  encapsulation: ViewEncapsulation.None
})
export class DropdownComponent extends Widget implements OnChanges,
  OnInit,
  DoCheck,
  AfterContentInit, AfterContentChecked,
  AfterViewInit, AfterViewChecked,
  OnDestroy {

  @Input() title: string;
  @Input() expanded: boolean;

  @HostBinding('class.v-dropdown') 'true';
  constructor(elementRef: ElementRef) {
    super(elementRef);
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
    // this.expanded = false;
  }
}
