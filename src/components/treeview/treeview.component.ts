import {Component, Input} from '@angular/core';
import {TreeView} from "./treeview";
import {TreeViewConfig} from './treeview-confg'
import {isNullOrUndefined} from "util";


@Component({
  selector: 'ave-treeview',
  template: `
    <div [ngStyle]="setStyles()"style="margin-left: 0">
      <ave-treenode *ngFor="let node of treeview.nodes" [node]="node" [container]="treeview"></ave-treenode>
    </div>
  `
})
export class TreeViewComponent {
  @Input() treeview: TreeView;


  constructor(config: TreeViewConfig) {
    if (this.treeview === undefined) {
      this.treeview = config.treeview;
    }
  }

  setStyles(config: TreeViewConfig) {
    let styles = {
      'background-color': isNullOrUndefined(this.treeview.backgroundColor) ? config.treeview.backgroundColor : this.treeview.backgroundColor,
      'width': isNullOrUndefined(this.treeview.width) ? config.treeview.width : this.treeview.width,
    };
    return styles;
  }
}
