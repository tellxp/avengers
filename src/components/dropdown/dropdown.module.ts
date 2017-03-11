import {NgModule} from '@angular/core';

import {BrowserModule} from "@angular/platform-browser";
import {DropdownComponent} from "../dropdown/dropdown.component";
import {PopupModule} from "../popup/popup.module";
import {ButtonModule} from "../button/button.module";
import {DropdownGroupComponent} from "./dropdown-group.component";
import {DropdownItemComponent} from "./dropdown-item.component";

@NgModule({
  imports: [
    BrowserModule,
    PopupModule,
    ButtonModule
  ],
  declarations: [
    DropdownComponent,
    DropdownGroupComponent,
    DropdownItemComponent
  ],
  exports: [
    DropdownComponent,
    DropdownGroupComponent,
    DropdownItemComponent
  ],
  providers: [],
})
export class DropdownModule {
}
