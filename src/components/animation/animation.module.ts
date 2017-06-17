import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {ArcylicModule} from '../acrylic/arcylic.module';
import {SlideRightComponent} from './slideright.component';


@NgModule({
  imports: [
    BrowserModule,
    ArcylicModule,
  ],
  exports: [
    SlideRightComponent,
  ],
  declarations: [
    SlideRightComponent,
  ],
  providers: [],
})
export class AnimationModule {
}
