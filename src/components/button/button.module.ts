import {NgModule} from '@angular/core';

import {BrowserModule} from '@angular/platform-browser';
import {ButtonComponent} from './button.component';
import {FadeinDirective} from '../motion/fadein.directive';

@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [
    ButtonComponent,
    FadeinDirective
  ],
  exports: [
    ButtonComponent
  ],
  providers: [],
})
export class ButtonModule {
}
