import {NgModule} from '@angular/core';

import {BrowserModule} from '@angular/platform-browser';
import {MenuComponent} from './menu.component';
import {MenuItemComponent} from './menu-item.component';
import {PopupModule} from '../popup/popup.module';
import {ArcylicModule} from '../acrylic/arcylic.module';
import {MenuHeaderComponent} from './menu-header.component';

@NgModule({
  imports: [
    BrowserModule,
    PopupModule,
    ArcylicModule,
  ],
  exports: [
    MenuComponent,
    MenuItemComponent,
    MenuHeaderComponent,
  ],
  declarations: [
    MenuComponent,
    MenuItemComponent,
    MenuHeaderComponent,

  ],
  providers: [],
})
export class MenuModule {
}


