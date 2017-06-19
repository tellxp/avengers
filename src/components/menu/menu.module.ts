import {NgModule} from '@angular/core';

import {BrowserModule} from '@angular/platform-browser';
import {MenuComponent} from './menu.component';
import {PopupModule} from '../popup/popup.module';
import {ArcylicModule} from '../acrylic/arcylic.module';
import {AnimationModule} from '../animation/animation.module';
import {MenuEntryComponent} from './menu-entry.component';
import {MenuHeaderComponent} from './menu-header.component';
import {MenuItemComponent} from './menu-item.component';
import {RippleModule} from '../ripple/ripple.module';

@NgModule({
  imports: [
    BrowserModule,
    PopupModule,
    ArcylicModule,
    AnimationModule,
    RippleModule,

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


