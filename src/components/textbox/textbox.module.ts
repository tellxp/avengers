import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {TextboxComponent} from './textbox.component';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';


@NgModule({
    imports: [
      BrowserModule,
      FormsModule,
      CommonModule
    ],
    exports: [
      TextboxComponent
    ],
    declarations: [
      TextboxComponent
    ],
    providers: [
    ],
})
export class TextboxModule { }
