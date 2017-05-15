import {AfterViewChecked, AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {ButtonComponent} from '../../../components/button/button.component';

@Component({
  templateUrl: './button-demo.component.html',
  styleUrls: ['./button-demo.component.scss']
})
export class ButtonDemoComponent implements OnInit, AfterViewInit, AfterViewChecked {

  @ViewChild('btn') viewBtn: ButtonComponent;
  constructor() {

  }

  ngOnInit() {
  }

  ngAfterViewInit() {

  }

  ngAfterViewChecked() {

  }
  onClick() {
  }
}
