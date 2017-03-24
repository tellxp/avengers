import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {GridRowComponent} from './grid-row.component';
import {GridColumnComponent} from './grid-col.component';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  declarations: [
    GridRowComponent,
    GridColumnComponent
  ],
  exports: [
    GridRowComponent,
    GridColumnComponent
  ],
  providers: []
})
export class LayoutModule {

}
