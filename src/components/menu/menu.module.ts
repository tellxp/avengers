import {NgModule} from '@angular/core';

import {BrowserModule} from '@angular/platform-browser';
import {MenuComponent} from './menu.component';
import {MenuItemComponent} from './menu-item.component';
import {PopupModule} from '../popup/popup.module';
import {ArcylicModule} from '../acrylic/arcylic.module';
import {MenuHeaderComponent} from './menu-header.component';
import {AnimationModule} from '../animation/animation.module';
import {MenuEntryComponent} from './menu-entry.component';

@NgModule({
  imports: [
    BrowserModule,
    PopupModule,
    ArcylicModule,
    AnimationModule,
  ],
  exports: [
    MenuComponent,
    MenuEntryComponent,
    MenuItemComponent,
    MenuHeaderComponent,
  ],
  declarations: [
    MenuComponent,
    MenuEntryComponent,
    MenuItemComponent,
    MenuHeaderComponent,

  ],
  providers: [],
})
export class MenuModule {
}


