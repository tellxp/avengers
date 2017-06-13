import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {AppRoutingModule} from './app-routing.module';

import {AppComponent} from './app.component';
import {AppDemoModule} from './demos/app-demo.module';
import {AppExampleModule} from './examples/app-example.module';
import {GuidelinesModule} from './material-design-zh/guidelines/guidelines.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppDemoModule,
    AppExampleModule,
    GuidelinesModule,
    AppRoutingModule,
  ],
  declarations: [
    AppComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
