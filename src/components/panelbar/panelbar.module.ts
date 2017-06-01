import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {PanelbarComponent} from './panelbar.component';
import {PanelbarItemComponent} from './panelbar-item.component';
import {PanelbarContentComponent} from './panelbar-content.component';
import {PanelbarHeaderComponent} from './panelbar-header.component';
import {AnimationModule} from '../animation/animation.module';
import {ArcylicModule} from '../acrylic/arcylic.module';


@NgModule({
  imports: [
    BrowserModule,
    AnimationModule,
    ArcylicModule,

  ],
  exports: [
    PanelbarComponent,
    PanelbarContentComponent,
    PanelbarItemComponent,
    PanelbarHeaderComponent,
  ],
  declarations: [
    PanelbarComponent,
    PanelbarContentComponent,
    PanelbarItemComponent,
    PanelbarHeaderComponent,

  ],
  providers: [],
})
export class PanelbarModule {
}
