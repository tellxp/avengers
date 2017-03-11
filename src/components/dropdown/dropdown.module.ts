import {NgModule} from '@angular/core';

import {BrowserModule} from "@angular/platform-browser";
import {Dropdown} from "../dropdown/dropdown.component";
import {PopupModule} from "../popup/popup.module";
import {ButtonModule} from "../button/button.module";
import {DropdownGroup} from "./dropdown-group.component";
import {DropdownItem} from "./dropdown-item.component";

@NgModule({
  imports: [
    BrowserModule,
    PopupModule,
    ButtonModule
  ],
  declarations: [
    Dropdown,
    DropdownGroup,
    DropdownItem
  ],
  exports: [
    Dropdown,
    DropdownGroup,
    DropdownItem
  ],
  providers: [],
})
export class DropdownModule {
}
