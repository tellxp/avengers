import { NgModule } from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {WidgetComponent, WidgetPosition, WidgetStyle} from './widget.component';

@NgModule({
    imports: [
      BrowserModule
    ],
    exports: [
      WidgetComponent,
    ],
    declarations: [
      WidgetComponent,

    ],
    providers: [

    ],
})
export class WidgetModule {

}
