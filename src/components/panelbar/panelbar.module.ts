import { NgModule } from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {PanelbarComponent} from './panelbar.component';
import {PanelbarItemComponent} from './panelbar-item.component';


@NgModule({
  imports: [
    BrowserModule
  ],
  exports: [
    PanelbarComponent,
    PanelbarItemComponent
  ],
  declarations: [
    PanelbarComponent,
    PanelbarItemComponent
  ],
  providers: [],
})
export class PanelbarModule { }
