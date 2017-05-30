import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {ArcylicContentComponent} from './arcylic-content.component';
import {ArcylicGroundComponent} from './arcylic-ground.component';
import {ArcylicMotionComponent} from './arcylic-motion.component';
import {ArcylicLightComponent} from './arcylic-light.component';


@NgModule({
    imports: [
      BrowserModule
    ],
    exports: [
      ArcylicContentComponent,
      ArcylicMotionComponent,
      ArcylicLightComponent,
      ArcylicGroundComponent,
    ],
    declarations: [
      ArcylicContentComponent,
      ArcylicMotionComponent,
      ArcylicLightComponent,
      ArcylicGroundComponent,
    ],
    providers: [
    ],
})
export class ArcylicModule { }
