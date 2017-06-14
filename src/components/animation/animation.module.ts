import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
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
      SlideRightComponent,
    ],
    declarations: [
      RippleComponent,
      SlideRightComponent,
    ],
    providers: [
    ],
})
export class AnimationModule { }
