import {NgModule} from '@angular/core';
import {MegamenuComponent} from './megamenu.component';
import {MegamenuGroupComponent} from './megamenu-group.component';
import {MegamenuItemComponent} from './megamenu-item.component';
import {BrowserModule} from '@angular/platform-browser';


@NgModule({
  imports: [
    BrowserModule
  ],

  declarations: [
    MegamenuComponent,
    MegamenuGroupComponent,
    MegamenuItemComponent
  ],
  exports: [
    MegamenuComponent,
    MegamenuGroupComponent,
    MegamenuItemComponent
  ],
  providers: [],
})
export class MegamenuModule {
}
