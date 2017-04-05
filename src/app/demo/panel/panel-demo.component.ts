import {Component, OnInit} from '@angular/core';
import {PanelAlignmentType} from '../../../components/panel/panel.component';

@Component({
  templateUrl: './panel-demo.component.html',
  styleUrls: ['./panel-demo.component.scss']
})
export class PanelDemoComponent implements OnInit {

  panel1Alignment: PanelAlignmentType;
  panel2Alignment: PanelAlignmentType;

  constructor() {
  }

  ngOnInit() {
    this.panel1Alignment = PanelAlignmentType.Stack;
    this.panel2Alignment = PanelAlignmentType.Tile;
  }

}
