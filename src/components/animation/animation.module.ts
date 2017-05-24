import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RippleDirective} from './ripple.directive';
import {SpreadDirective} from './spread.directive';


@NgModule({
    imports: [
      BrowserModule
    ],
    exports: [
      RippleDirective,
      SpreadDirective,

    ],
    declarations: [
      RippleDirective,
      SpreadDirective,
    ],
    providers: [
    ],
})
export class AnimationModule { }
