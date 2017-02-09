import {NgModule} from '@angular/core';

import {BrowserModule} from "@angular/platform-browser";
import {Dropdown} from "../dropdown/dropdown.component";
import {PopupModule} from "../popup/popup.module";
import {ButtonModule} from "../button/button.module";

@NgModule({
  imports: [
    BrowserModule,
    PopupModule,
    ButtonModule
  ],
  declarations: [
    Dropdown
  ],
  exports: [
    Dropdown
  ],
  providers: [],
})
export class DropdownModule {
}
