import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RippleComponent} from './ripple.component';
import {SlideDownComponent} from './slidedown.component';
import {ArcylicModule} from '../acrylic/arcylic.module';


@NgModule({
    imports: [
      BrowserModule,
      ArcylicModule,
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
