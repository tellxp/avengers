import { NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import {TreeViewComponent} from "./treeview.component";
import {TreeNodeComponent} from "./treenode.component";
import {TreeViewConfig} from "./treeview-confg";
import {Styles} from "./treeview-styles";



@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  declarations: [
    TreeViewComponent,
    TreeNodeComponent
  ],
  exports: [
    TreeViewComponent
  ],
  providers: [
    TreeViewConfig,
    Styles
  ]
})
export class TreeViewModule {

}
