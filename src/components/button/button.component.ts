import {Component, ElementRef, AfterViewChecked, HostBinding} from '@angular/core';
import {DomService} from '../common/dom.service';
import {WidgetComponent} from '../common/widget.component';

@Component({
  selector: 'ave-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  providers: [DomService]
})
export class ButtonComponent extends WidgetComponent implements AfterViewChecked {
  @HostBinding('attr.tabindex') '-1';

  constructor(public el: ElementRef, public dom: DomService) {
    super(el, dom);
  }

  ngAfterViewChecked() {
    super.ngAfterViewChecked();
  }
}
