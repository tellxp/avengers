import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {NavbarComponent} from "./navbar.component";

import {ButtonsModule} from '@progress/kendo-angular-buttons';
import {LayoutModule} from '@progress/kendo-angular-layout';

@NgModule({
  imports: [
    BrowserModule,
    ButtonsModule,
    LayoutModule
  ],
  declarations: [
    NavbarComponent
  ],
  exports: [
    NavbarComponent
  ],
  providers: []
})
export class NavbarModule {

}
