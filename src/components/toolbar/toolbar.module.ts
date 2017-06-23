import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {ToolbarComponent} from './toolbar.component';
import {ToolbarItemComponent} from './toolbar-item.component';


@NgModule({
    imports: [
      BrowserModule
    ],
    exports: [
      ToolbarComponent,
      ToolbarItemComponent
    ],
    declarations: [
      ToolbarComponent,
      ToolbarItemComponent
    ],
    providers: [
    ],
})
export class ToolbarModule { }
