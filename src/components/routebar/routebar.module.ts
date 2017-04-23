import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RoutebarComponent} from './routebar.component';
import {RoutebarItemComponent} from './routebar-item.component';


@NgModule({
    imports: [
      BrowserModule
    ],
    exports: [
      RoutebarComponent,
      RoutebarItemComponent
    ],
    declarations: [
      RoutebarComponent,
      RoutebarItemComponent
    ],
    providers: [
    ],
})
export class RoutebarModule { }
