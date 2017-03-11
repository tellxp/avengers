import { NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import {GridRow} from "./grid-row.component";
import {GridColumn} from "./grid-col.component";


@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  declarations: [
    GridRow,
    GridColumn
  ],
  exports: [
    GridRow,
    GridColumn
  ],
  providers: [

  ]
})
export class CellModule {

}
