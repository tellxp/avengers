import {
  Component,
  ElementRef,
  AfterViewChecked,
  OnInit,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  OnDestroy
} from "@angular/core";
import {DomService} from "../common/dom.service";
import {Widget} from "../common/widget.component";


@Component({
  selector: 'ave-megamenu-entry',
  templateUrl: './megamenu-entry.component.html',
  styleUrls: ['./megamenu-entry.component.scss']
})
export class MegamenuEntry extends Widget implements OnInit,
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
