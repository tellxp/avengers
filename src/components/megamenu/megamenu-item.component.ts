import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  ElementRef, Input,
  OnChanges,
  OnDestroy,
  OnInit
} from '@angular/core';
import {DomService} from '../common/dom.service';
import {WidgetComponent} from '../common/widget.component';


@Component({
  selector: 'ave-megamenu-item',
  templateUrl: './megamenu-item.component.html',
  styleUrls: ['./megamenu-item.component.scss'],
  providers: [DomService]
})
export class MegamenuItemComponent extends WidgetComponent implements OnChanges,
  OnInit,
  DoCheck,
  AfterContentInit, AfterContentChecked,
  AfterViewInit, AfterViewChecked,
  OnDestroy {

  @Input() title;
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
    super.ngAfterViewChecked();
  }

  ngOnDestroy() {
    super.ngOnDestroy();
  }

}
