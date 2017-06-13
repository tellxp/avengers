import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {MarkdownComponent} from './markdown.component';

@NgModule({
    imports: [
      BrowserModule,
    ],
    exports: [
      MarkdownComponent,
    ],
    declarations: [
      MarkdownComponent,

    ],
    providers: [
    ],
})
export class MarkdownModule { }
