import {NgModule} from '@angular/core';

import {BrowserModule} from '@angular/platform-browser';
import {MenuComponent} from './menu.component';
import {MenuItemComponent} from './menu-item.component';
import {PopupModule} from '../popup/popup.module';
import {ArcylicModule} from '../acrylic/arcylic.module';
import {MenuHeaderComponent} from './menu-header.component';
import {AnimationModule} from '../animation/animation.module';

@NgModule({
  imports: [
    BrowserModule,
    PopupModule,
    ArcylicModule,
    AnimationModule,
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


