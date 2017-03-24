import {NgModule} from '@angular/core';

import {BrowserModule} from '@angular/platform-browser';
import {MenuComponent} from './menu.component';
import {MenuItemComponent} from './menu-item.component';
import {MenuBarComponent} from './menu-bar.component';
import {PopupModule} from '../popup/popup.module';
import {MenuEntryComponent} from './menu-entry.component';

@NgModule({
  imports: [
    BrowserModule,
    PopupModule
  ],
  exports: [
    MenuComponent,
    MenuBarComponent,
    MenuEntryComponent,
    MenuItemComponent
  ],
  declarations: [
    MenuComponent,
    MenuBarComponent,
    MenuEntryComponent,
    MenuItemComponent
  ],
  providers: [],
})
export class MenuModule {
}


