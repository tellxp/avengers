import {NgModule} from "@angular/core";
import {Megamenu} from "./megamenu.component";
import {MegamenuGroup} from "./megamenu-group.component";
import {MegamenuItem} from "./megamenu-item.component";
import {PopupModule} from "../popup/popup.module";
import {BrowserModule} from "@angular/platform-browser";


@NgModule({
  imports: [
    BrowserModule
  ],

  declarations: [
    Megamenu,
    MegamenuGroup,
    MegamenuItem
  ],
  exports: [
    Megamenu,
    MegamenuGroup,
    MegamenuItem
  ],
  providers: [],
})
export class MegamenuModule {
}
