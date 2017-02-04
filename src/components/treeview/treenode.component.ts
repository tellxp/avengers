import {Component, Input} from '@angular/core';
import {TreeNode} from './treenode'
import {TreeView} from "./treeview";

@Component({
  selector: 'ave-treenode',
  template: `
      <li>
        <div (click)="onNodeClick($event)" (dblclick)="onNodeDblClick($event)">
          <i 
            *ngIf="node.children"
            [ngClass]="{'fa': true, 'fa-chevron-circle-down ': node.expanded, 'fa-chevron-circle-right': !node.expanded}" 
            (click)="onDirectionIconClick($event)" 
            aria-hidden="true">
          </i>
          <span></span>
          {{node.text}}
        </div>
        <ul *ngIf="node.children && node.expanded">
          <ave-treenode *ngFor="let child of node.children" [node]="child" [container]="container"></ave-treenode>
        </ul>
      </li>
  `,
  styles: [`
      li {
        list-style: none;
        font-size: x-large;
        cursor: default;
      }
      div:hover {
        background-color: red;
      }
      ul {
        margin: .04em;
      }
      i {
        cursor: pointer;
      }
  `]
})
export class TreeNodeComponent {
  @Input() node: TreeNode;
  @Input() container: TreeView;
  constructor() {

  }
  onDirectionIconClick(event: MouseEvent) {
    this.node.expanded = !this.node.expanded;
  }
  onNodeClick(event: MouseEvent) {
    console.log(this.node.text);
  }
  onNodeDblClick(event: MouseEvent) {
    this.node.expanded = !this.node.expanded;
  }
}
