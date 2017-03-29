import {
  AfterContentChecked,
  AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, ElementRef, Input, OnChanges, OnDestroy,
  OnInit
} from '@angular/core';
import {DomService} from '../common/dom.service';
import {WidgetComponent} from '../common/widget.component';

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
  @Input() value;

  constructor(elementRef: ElementRef, domService: DomService) {
    super(elementRef, domService);
  }

  ngOnChanges() {
    super.ngOnChanges();
    this.value = 'ngOnChanges';
    console.log(this.value);
  }

  ngOnInit() {
    super.ngOnInit();
    this.value = 'ngOnInit';
    console.log(this.value);

  }

  ngDoCheck() {
    super.ngDoCheck();
    this.value = 'ngDoCheck';
    console.log(this.value);

  }

  ngAfterContentInit() {
    super.ngAfterContentInit();
    this.value = 'ngAfterContentInit';
    console.log(this.value);

  }

  ngAfterContentChecked() {
    super.ngAfterContentChecked();
    this.value = 'ngAfterContentChecked';
    console.log(this.value);

  }

  ngAfterViewInit() {
    super.ngAfterViewInit();
    this.value = 'ngAfterViewInit';
    console.log(this.value);

  }

  ngAfterViewChecked() {
    super.ngAfterViewInit();
    this.value = 'ngAfterViewChecked';
    console.log(this.value);

  }

  ngOnDestroy() {
    super.ngOnDestroy();
    this.value = 'ngOnDestroy';
    console.log(this.value);

  }

  onClick() {
    this.expanded = !this.expanded;
  }

  onBlur() {
    // this.active = false;
  }
}
