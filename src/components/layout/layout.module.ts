import { NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import {RowComponent} from "./row.component";
import {ColComponent} from "./col.component";


@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  declarations: [
    RowComponent,
    ColComponent
  ],
  exports: [
    RowComponent,
    ColComponent
  ],
  providers: [

  ]
})
export class CellModule {

}
