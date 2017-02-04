import { NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import {SideMenuComponent} from "./side-menu.component";

import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { LayoutModule } from '@progress/kendo-angular-layout';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ButtonsModule,
    LayoutModule
  ],
  declarations: [
    SideMenuComponent
  ],
  exports: [
    SideMenuComponent
  ],
  providers: [

  ]
})
export class SideMenuModule {

}
