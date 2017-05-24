import {NgModule} from '@angular/core';

import {BrowserModule} from '@angular/platform-browser';
import {ButtonComponent} from './button.component';
import {AnimationModule} from '../animation/animation.module';

@NgModule({
  imports: [
    BrowserModule,
    AnimationModule,
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
