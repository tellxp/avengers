import { NgModule } from '@angular/core';

import {BrowserModule} from "@angular/platform-browser";
import {MenuComponent} from "./menu.component";
import {MenuGroupComponent} from "./menu-group.component";
import {MenuItemComponent} from "./menu-item.component";
import {MenuBarComponent} from "./menu-bar.component";
import {PopupModule} from "../popup/popup.module";
import {MenuEntryComponent} from "./menu-entry.component";
import {MenuPanelComponent} from "./menu-panel.component";

@NgModule({
    imports: [
      BrowserModule,
      PopupModule
    ],
    exports: [
      MenuComponent,
      MenuBarComponent,
      MenuEntryComponent,
      MenuPanelComponent,
      MenuGroupComponent,
      MenuItemComponent
    ],
    declarations: [
      MenuComponent,
      MenuBarComponent,
      MenuEntryComponent,
      MenuPanelComponent,
      MenuGroupComponent,
      MenuItemComponent
    ],
    providers: [],
})
export class MenuModule { }


