import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {SlideDownComponent} from './slidedown.component';
import {ArcylicModule} from '../acrylic/arcylic.module';
import {RippleComponent} from './ripple.component';


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
