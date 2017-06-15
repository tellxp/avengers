import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RippleComponent} from './ripple.component';
import {RippleElementComponent} from './ripple-element.component';


@NgModule({
    imports: [
      BrowserModule
    ],
    exports: [
      RippleComponent,
      RippleElementComponent,
    ],
    declarations: [
      RippleComponent,
      RippleElementComponent,

    ],
    providers: [
    ],
})
export class RippleModule { }
