import {
  Component, OnInit, Input, AfterViewInit, ViewChild, ElementRef, trigger, state,
  transition, style, animate
} from '@angular/core';
import {DomService} from "../common/dom.service";

@Component({
  selector: 'ave-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss'],
  animations: [
    trigger('expandedState', [
      transition('void => *', [
        style({
          opacity: 0
        }),
        animate('0.5s ease-in')
      ]),
      transition('* => void', [
        animate('0.5s ease-out', style({
          opacity: 0
        }))
      ])
    ])
  ],
  providers: [DomService]
})
export class Dropdown implements OnInit, AfterViewInit {
  @Input() title: string;
  @Input() expanded: boolean;
  private domService: DomService;

  constructor(private el: ElementRef, dom: DomService) {
    this.domService = dom;
    this.domService.loadElement(el);
  }

  ngOnInit() {
  }

  onClick() {
    this.expanded = !this.expanded;
  }
  onBlur() {
    this.expanded = false;
  }
  ngAfterViewInit() {

  }
}
