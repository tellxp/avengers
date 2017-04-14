import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {GridRowComponent} from './grid-row.component';
import {GridColumnComponent} from './grid-column.component';
import {GridComponent} from './grid.component';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  declarations: [
    GridComponent,
    GridRowComponent,
    GridColumnComponent
  ],
  exports: [
    GridComponent,
    GridRowComponent,
    GridColumnComponent
  ],
  providers: []
})
export class GridModule {

}
