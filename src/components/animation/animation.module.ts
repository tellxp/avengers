import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RippleDirective} from './ripple.directive';
import {ExpandComponent} from './slide.component';


@NgModule({
    imports: [
      BrowserModule
    ],
    exports: [
      RippleDirective,
      ExpandComponent,


    ],
    declarations: [
      RippleDirective,
      ExpandComponent,
    ],
    providers: [
    ],
})
export class AnimationModule { }
