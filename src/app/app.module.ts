import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import { AppRoutingModule } from './app-routing.module';

import {AppComponent} from './app.component';
import {CellModule} from '../components/layout/layout.module';
import {NavbarModule} from '../components/navbar/navbar.module';
import {SideMenuModule} from '../components/side-menu/side-menu.module';
import {TabstripDemo} from  './demo/tabstrip/tabstrip-demo.component'
import {TabstripModule} from "../components/tabstrip/tabstrip.module";
import {ButtonModule} from "../components/button/button.module";
import {ButtonDemo} from "./demo/button/button-demo.component";
import {PopupModule} from "../components/popup/popup.module";


@NgModule({
  declarations: [
    AppComponent,
    TabstripDemo,
    ButtonDemo
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,

    //Avengers lib
    CellModule,
    NavbarModule,
    SideMenuModule,
    TabstripModule,
    ButtonModule,
    PopupModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
