import {NgModule} from '@angular/core';

import {BrowserModule} from '@angular/platform-browser';
import {ButtonComponent} from './button.component';
import {RippleDirective} from '../animation/ripple.directive';

@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [
    ButtonComponent,
    RippleDirective
  ],
  exports: [
    ButtonComponent
  ],
  providers: [],
})
export class ButtonModule {
}
