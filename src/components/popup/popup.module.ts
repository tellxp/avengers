import { NgModule } from '@angular/core';
import {Popup} from "./popup.component";
import {BrowserModule} from "@angular/platform-browser";
import {PositionService} from "../common/position.service";


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
      PositionService
    ],
})
export class PopupModule { }
