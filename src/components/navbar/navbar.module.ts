import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {NavbarComponent} from './navbar.component';
import {NavbarItemComponent} from './navbar-item.component';


@NgModule({
    imports: [
      BrowserModule
    ],
    exports: [
      NavbarComponent,
      NavbarItemComponent
    ],
    declarations: [
      NavbarComponent,
      NavbarItemComponent
    ],
    providers: [
    ],
})
export class NavbarModule { }
