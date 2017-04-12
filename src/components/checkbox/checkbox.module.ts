import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {CheckboxComponent} from './checkbox.component';
import {FormsModule} from '@angular/forms';


@NgModule({
    imports: [
      BrowserModule,
      FormsModule
    ],
    exports: [
      CheckboxComponent
    ],
    declarations: [
      CheckboxComponent
    ],
    providers: [
    ],
})
export class CheckboxModule { }
