import {NgModule} from '@angular/core';
import {MegamenuComponent} from './megamenu.component';
import {MegamenuGroupComponent} from './megamenu-group.component';
import {MegamenuItemComponent} from './megamenu-item.component';
import {BrowserModule} from '@angular/platform-browser';
import {MegamenuEntryComponent} from './megamenu-entry.component';
import {MegamenuBarComponent} from './megamenu-bar.component';
import {PopupModule} from '../popup/popup.module';


@NgModule({
  imports: [
    BrowserModule,
    PopupModule
  ],

  declarations: [
    MegamenuComponent,
    MegamenuBarComponent,
    MegamenuEntryComponent,
    MegamenuGroupComponent,
    MegamenuItemComponent
  ],
  exports: [
    MegamenuComponent,
    MegamenuBarComponent,
    MegamenuEntryComponent,
    MegamenuGroupComponent,
    MegamenuItemComponent
  ],
  providers: [],
})
export class MegamenuModule {
}
