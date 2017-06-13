import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';

import {TreeviewComponent} from './treeview.component';
import {TreenodeComponent} from './treenode.component';
import {TreeViewConfig} from './treeview-confg';
import {Styles} from './treeview-styles';
import {WidgetModule} from '../core/widget.module';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    WidgetModule,
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
