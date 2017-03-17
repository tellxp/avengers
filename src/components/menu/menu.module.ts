import { NgModule } from '@angular/core';

import {BrowserModule} from "@angular/platform-browser";
import {Menu} from "./menu.component";
import {MenuItem} from "./menu-item.component";
import {MenuBar} from "./menu-bar.component";
import {PopupModule} from "../popup/popup.module";
import {MenuEntry} from "./menu-entry.component";

@NgModule({
    imports: [
      BrowserModule,
      PopupModule
    ],
    exports: [
      Menu,
      MenuBar,
      MenuEntry,
      MenuItem
    ],
    declarations: [
      Menu,
      MenuBar,
      MenuEntry,
      MenuItem
    ],
    providers: [],
})
export class MenuModule { }


