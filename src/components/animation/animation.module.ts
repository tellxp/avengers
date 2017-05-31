import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RippleComponent} from './ripple.component';
import {SlideDownComponent} from './slidedown.component';
import {RippleTodoComponent} from './ripple.component.todo';


@NgModule({
    imports: [
      BrowserModule
    ],
    exports: [
      RippleComponent,
      RippleTodoComponent,
      SlideDownComponent,


    ],
    declarations: [
      RippleComponent,
      RippleTodoComponent,
      SlideDownComponent,

    ],
    providers: [
    ],
})
export class AnimationModule { }
