import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {SlideDownComponent} from './slidedown.component';
import {ArcylicModule} from '../acrylic/arcylic.module';
import {RippleComponent} from './ripple.component';
import {SlideRightComponent} from './slideright.component';


@NgModule({
    imports: [
      BrowserModule,
      ArcylicModule,
    ],
    exports: [
      RippleComponent,
      SlideDownComponent,
      SlideRightComponent,
    ],
    declarations: [
      RippleComponent,
      SlideDownComponent,
      SlideRightComponent,

    ],
    providers: [
    ],
})
export class AnimationModule { }
