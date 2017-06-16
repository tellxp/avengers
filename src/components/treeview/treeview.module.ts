import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';

import {TreeviewComponent} from './treeview.component';
import {TreenodeComponent} from './treenode.component';
import {TreeViewConfig} from './treeview-confg';
import {Styles} from './treeview-styles';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
  ],
  declarations: [
    TreeviewComponent,
    TreenodeComponent
  ],
  exports: [
    TreeviewComponent,
    TreenodeComponent
  ],
  providers: [
    TreeViewConfig,
    Styles
  ]
})
export class TreeviewModule {

}
