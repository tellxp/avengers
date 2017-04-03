import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {PanelComponent} from './panel.component';


@NgModule({
  imports: [
    BrowserModule
  ],
  exports: [
    PanelComponent
  ],
  declarations: [
    PanelComponent
  ],
  providers: [],
})
export class PanelModule { }
