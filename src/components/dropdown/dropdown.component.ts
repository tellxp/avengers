import {Component, OnInit, Input} from '@angular/core';

@Component({
    selector: 'ave-dropdown',
    templateUrl: './dropdown.component.html',
    styleUrls: ['./dropdown.component.scss']
})
export class Dropdown implements OnInit {
  @Input() title: string;
  @Input() expanded: boolean;
    constructor() { }

    ngOnInit() { }
    onClick() {
      this.expanded = !this.expanded;
    }
}
