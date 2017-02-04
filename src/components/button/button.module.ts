import {NgModule} from '@angular/core';

import {BrowserModule} from "@angular/platform-browser";
import {Button} from "./button.component";

@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [
    Button
  ],
  exports: [
    Button
  ],
  providers: [],
})
export class ButtonModule {
}
