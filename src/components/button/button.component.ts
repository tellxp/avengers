import {Component, ElementRef, AfterViewChecked} from "@angular/core";
import {DomService} from "../common/dom.service";
import {Widget} from "../common/widget.component";

@Component({
  selector: 'ave-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  host: {'tabindex': '-1'},
  providers: [DomService]
})
export class Button extends Widget implements AfterViewChecked {

  constructor(public el: ElementRef, public dom: DomService) {
    super(el, dom);
  }


  ngAfterViewChecked() {
    super.ngAfterViewChecked();
  }
}
