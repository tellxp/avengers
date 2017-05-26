import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RippleComponent} from './ripple.component';
import {SlideDownComponent} from './slidedown.component';


@NgModule({
    imports: [
      BrowserModule
    ],
    exports: [
      RippleComponent,
      SlideDownComponent,


    ],
    declarations: [
      RippleComponent,
      SlideDownComponent,
    ],
    providers: [
    ],
})
export class AnimationModule { }
