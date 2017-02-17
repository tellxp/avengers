import {Component, OnInit, ElementRef, AfterViewInit, AfterContentInit, HostListener} from '@angular/core';
import {DomService} from "../common/dom.service";

@Component({
  selector: 'ave-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  host: {'tabindex':'-1'},
  providers: [DomService]
})
export class Button implements OnInit, AfterViewInit, AfterContentInit {

  public domService: DomService;
  constructor(el: ElementRef, dom: DomService) {
    this.domService = dom;
    this.domService.loadElement(el);
  }

  ngAfterViewInit() {

  }

  ngAfterContentInit() {
  }

  ngOnInit() {
  }
}
