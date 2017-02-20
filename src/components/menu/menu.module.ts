import { NgModule } from '@angular/core';

import {BrowserModule} from "@angular/platform-browser";
import {Menu} from "./menu.component";
import {MenuGroup} from "./menu-group.component";
import {MenuItem} from "./menu-item.component";
import {MenuBar} from "./menu-bar.component";
import {PopupModule} from "../popup/popup.module";

@NgModule({
    imports: [
      BrowserModule,
      PopupModule
    ],
    exports: [
      Menu,
      MenuBar,
      MenuGroup,
      MenuItem
    ],
    declarations: [
      Menu,
      MenuBar,
      MenuGroup,
      MenuItem
    ],
    providers: [],
})
export class MenuModule { }
