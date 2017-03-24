import {AfterViewInit, Component, ElementRef, Input, OnInit} from '@angular/core';
import {DomService} from '../common/dom.service';

@Component({
  selector: 'ave-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss'],

  providers: [DomService]
})
export class DropdownComponent implements OnInit, AfterViewInit {
  @Input() title: string;
  @Input() expanded: boolean;

  constructor(private el: ElementRef, public dom: DomService) {
  }

  ngOnInit() {
  }

  onClick() {
    this.expanded = !this.expanded;
  }

  onBlur() {
    // this.active = false;
  }

  ngAfterViewInit() {

  }
}
