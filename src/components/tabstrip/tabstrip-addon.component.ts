import {Component, OnInit, ElementRef} from '@angular/core';
import {Widget} from "../common/widget.component";
import {DomService} from "../common/dom.service";

@Component({
  selector: 'ave-tabstrip-addon',
  templateUrl: './tabstrip-addon.component.html',
  styleUrls: ['./tabstrip-addon.component.scss'],
  providers: [DomService]
})
export class TabstripAddon extends Widget implements OnInit {
  constructor(elementRef: ElementRef, domService: DomService) {
    super(elementRef, domService);
  }

  ngOnInit() {
  }

}
