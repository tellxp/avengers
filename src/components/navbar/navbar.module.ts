import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {NavbarComponent} from './navbar.component';


@NgModule({
    imports: [
      BrowserModule
    ],
    exports: [
      NavbarComponent
    ],
    declarations: [
      NavbarComponent
    ],
    providers: [
    ],
})
export class NavbarModule { }
