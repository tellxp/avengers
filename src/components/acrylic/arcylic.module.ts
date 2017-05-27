import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {ArcylicContentComponent} from './arcylic-content.component';
import {GroundComponent} from './arcylic-ground.component';
import {MotionComponent} from './arcylic-motion.component';
import {LightComponent} from './arcylic-light.component';


@NgModule({
    imports: [
      BrowserModule
    ],
    exports: [
      ArcylicContentComponent,
      MotionComponent,
      LightComponent,
      GroundComponent,
    ],
    declarations: [
      ArcylicContentComponent,
      MotionComponent,
      LightComponent,
      GroundComponent,
    ],
    providers: [
    ],
})
export class ArcylicModule { }
