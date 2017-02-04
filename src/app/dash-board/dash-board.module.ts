import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './dash-board.component';

import {SideMenuModule} from "../../components/side-menu/side-menu.module";
import {CellModule} from "../../components/layout/layout.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,

    //我的模块
    SideMenuModule,
    CellModule
  ],
  providers: []
})
export class DashBoardModule { }
