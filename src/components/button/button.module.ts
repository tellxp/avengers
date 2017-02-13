import {NgModule} from '@angular/core';

import {BrowserModule} from "@angular/platform-browser";
import {Button} from "./button.component";
import {Dropdown} from "../dropdown/dropdown.component";
import {PopupModule} from "../popup/popup.module";

@NgModule({
  imports: [
    BrowserModule,
    PopupModule
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
