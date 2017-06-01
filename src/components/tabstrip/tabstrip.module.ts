import {NgModule} from '@angular/core';

import {TabstripComponent} from './tabstrip.component';
import {TabstripPanelComponent} from './tabstrip-panel.component';
import {TabstripTabComponent} from './tabstrip-tab.component';
import {BrowserModule} from '@angular/platform-browser';
import {TabstripBarComponent} from './tabstrip-bar.component';
import {TabstripPageComponent} from './tabstrip-page.component';
import {TabstripToggleComponent} from './tabstrip-toggle.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AnimationModule} from '../animation/animation.module';
import {ArcylicModule} from '../acrylic/arcylic.module';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AnimationModule,
    ArcylicModule,
  ],
  declarations: [
    TabstripComponent,
    TabstripBarComponent,
    TabstripTabComponent,
    TabstripPanelComponent,
    TabstripPageComponent,
    TabstripToggleComponent,
  ],
  exports: [
    TabstripComponent,
    TabstripBarComponent,
    TabstripTabComponent,
    TabstripPanelComponent,
    TabstripPageComponent,
    TabstripToggleComponent,
  ],
  providers: []
})
export class TabstripModule { }
