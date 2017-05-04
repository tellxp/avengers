import {Component, Input} from '@angular/core';
import {TreeView} from './treeview';
import {TreeViewConfig} from './treeview-confg'


@Component({
  selector: 'ave-treeview',
  template: ``
})
export class TreeViewComponent {
  @Input() treeview: TreeView;


  constructor(config: TreeViewConfig) {
    if (this.treeview === undefined) {
      this.treeview = config.treeview;
    }
  }

}
