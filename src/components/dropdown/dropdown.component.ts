import {Component, OnInit, Input, AfterViewInit, ViewChild, ElementRef} from '@angular/core';
import {Popup} from "../popup/popup.component";
import {PositionService} from "../common/position.service";

@Component({
  selector: 'ave-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class Dropdown implements OnInit, AfterViewInit {
  @Input() title: string;
  @Input() expanded: boolean;
  @ViewChild(Popup) popup: Popup;

  constructor(private el: ElementRef, private position: PositionService) {

  }

  ngOnInit() {
  }

  onClick() {
    this.expanded = !this.expanded;
  }

  ngAfterViewInit() {
    this.position.setAnchor(this.el);
    console.log(this.position);
  }
}
