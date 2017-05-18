import {NgModule} from '@angular/core';

import {BrowserModule} from '@angular/platform-browser';
import {ButtonComponent} from './button.component';
import {ScaleinDirective} from '../animation/scalein.directive';

@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [
    ButtonComponent,
    ScaleinDirective
  ],
  exports: [
    ButtonComponent
  ],
  providers: [],
})
export class ButtonModule {
}
