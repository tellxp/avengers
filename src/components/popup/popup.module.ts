import { NgModule } from '@angular/core';
import {Popup, PopupOrientation} from "./popup.component";
import {BrowserModule} from "@angular/platform-browser";


@NgModule({
    imports: [
      BrowserModule
    ],
    exports: [
      Popup
    ],
    declarations: [
      Popup
    ],
    providers: [
    ],
})
export class PopupModule { }
