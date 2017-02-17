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
import {PopupDemo} from "./demo/popup/popup-demo.component";
import {DropdownModule} from "../components/dropdown/dropdown.module";
import {DropdownDemo} from "./demo/dropdown/dropdown-demo.component";
import {CommonModule} from "../components/common/common.module";


@NgModule({
  declarations: [
    AppComponent,
    TabstripDemo,
    ButtonDemo,
    PopupDemo,
    DropdownDemo,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,

    //Avengers Component
    CommonModule,
    CellModule,
    NavbarModule,
    SideMenuModule,
    TabstripModule,
    ButtonModule,
    PopupModule,
    DropdownModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
