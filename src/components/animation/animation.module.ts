import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RippleComponent} from './ripple.component';
import {SlideDownComponent} from './slidedown.component';
import {ArcylicModule} from '../acrylic/arcylic.module';
import {RippleTodoComponent} from './ripple-todo.component';


@NgModule({
    imports: [
      BrowserModule,
      ArcylicModule,
    ],
    exports: [
      RippleComponent,
      RippleTodoComponent,
      SlideDownComponent,


    ],
    declarations: [
      RippleComponent,
      RippleTodoComponent,
      SlideDownComponent,

    ],
    providers: [
    ],
})
export class AnimationModule { }
