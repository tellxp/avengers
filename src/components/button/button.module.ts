import {NgModule} from '@angular/core';

import {BrowserModule} from '@angular/platform-browser';
import {ButtonComponent} from './button.component';
import {AnimationModule} from '../animation/animation.module';
import {ArcylicModule} from '../acrylic/arcylic.module';

@NgModule({
  imports: [
    BrowserModule,
    AnimationModule,
    ArcylicModule,
  ],
  declarations: [
    ButtonComponent,
  ],
  exports: [
    ButtonComponent
  ],
  providers: [],
})
export class ButtonModule {
}
