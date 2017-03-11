import {NgModule} from '@angular/core';

import {BrowserModule} from "@angular/platform-browser";
import {ButtonComponent} from "./button.component";
import {PopupModule} from "../popup/popup.module";

@NgModule({
  imports: [
    BrowserModule,
    PopupModule
  ],
  declarations: [
    ButtonComponent
  ],
  exports: [
    ButtonComponent
  ],
  providers: [
  ],
})
export class ButtonModule {
}
