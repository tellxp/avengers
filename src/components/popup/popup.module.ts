import { NgModule } from '@angular/core';
import {PopupComponent, PopupOrientation} from "./popup.component";
import {BrowserModule} from "@angular/platform-browser";


@NgModule({
    imports: [
      BrowserModule
    ],
    exports: [
      PopupComponent
    ],
    declarations: [
      PopupComponent
    ],
    providers: [
    ],
})
export class PopupModule { }
