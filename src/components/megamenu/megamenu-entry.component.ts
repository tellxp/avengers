import {
  Component,
  ElementRef,
  AfterViewChecked,
  OnInit,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  OnDestroy
} from '@angular/core';
import {DomService} from '../common/dom.service';
import {WidgetComponent} from '../common/widget.component';


@Component({
  selector: 'ave-megamenu-entry',
  templateUrl: './megamenu-entry.component.html',
  styleUrls: ['./megamenu-entry.component.scss']
})
export class MegamenuEntryComponent extends WidgetComponent implements OnInit,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy {

  constructor(elementRef: ElementRef, domService: DomService) {
    super(elementRef, domService);
  }

  ngOnInit() {
    super.ngOnInit();
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

}
