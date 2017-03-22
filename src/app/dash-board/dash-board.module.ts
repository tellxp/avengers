import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {AppComponent} from "./dash-board.component";
import {LayoutModule} from "../../components/layout/layout.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,

    //我的模块
    LayoutModule
  ],
  providers: []
})
export class DashBoardModule {
}
