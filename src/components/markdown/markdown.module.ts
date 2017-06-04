import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {MarkdownComponent} from './markdown.component';
import {markdown} from 'markdown';

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
