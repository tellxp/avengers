import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import { AppRoutingModule } from './app-routing.module';

import {AppComponent} from './app.component';

import {CellModule} from '../components/layout/layout.module';

import {TabstripDemo} from  './demo/tabstrip/tabstrip-demo.component'
import {TabstripModule} from "../components/tabstrip/tabstrip.module";
import {ButtonModule} from "../components/button/button.module";
import {ButtonDemo} from "./demo/button/button-demo.component";
import {PopupModule} from "../components/popup/popup.module";
import {PopupDemo} from "./demo/popup/popup-demo.component";
import {DropdownModule} from "../components/dropdown/dropdown.module";
import {DropdownDemo} from "./demo/dropdown/dropdown-demo.component";
import {CommonModule} from "../components/common/common.module";
import {MenuDemo} from "./demo/menu/menu-demo.component";
import {MenuModule} from "../components/menu/menu.module";
import {HomeDemo} from "./demo/home/home-demo.component";

import {} from '@types/node'
import {MegamenuDemo} from "./demo/megamenu/megamenu-demo.component";
import {MegamenuModule} from "../components/megamenu/megamenu.module";


@NgModule({
  declarations: [
    AppComponent,
    HomeDemo,
    TabstripDemo,
    ButtonDemo,
    PopupDemo,
    DropdownDemo,
    MenuDemo,
    MegamenuDemo

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,

    //Avengers Component
    CommonModule,
    CellModule,
    TabstripModule,
    ButtonModule,
    PopupModule,
    DropdownModule,
    MenuModule,
    MegamenuModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
