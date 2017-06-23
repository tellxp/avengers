import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {GuidelinesComponent} from './guidelines.component';
import {GuidelinesRoutingModule} from './guidelines-routing.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {GridModule} from '../../../components/grid/grid.module';
import {TabstripModule} from '../../../components/tabstrip/tabstrip.module';
import {ButtonModule} from '../../../components/button/button.module';
import {PopupModule} from '../../../components/popup/popup.module';
import {MenuModule} from '../../../components/menu/menu.module';
import {MegamenuModule} from '../../../components/megamenu/megamenu.module';
import {PanelbarModule} from '../../../components/panelbar/panelbar.module';
import {PanelModule} from '../../../components/panel/panel.module';
import {CheckboxModule} from '../../../components/checkbox/checkbox.module';
import {TextboxModule} from '../../../components/textbox/textbox.module';
import {DropdownModule} from '../../../components/dropdown/dropdown.module';
import {IntroductionComponent} from './material-design/introduction/introduction.component';
import {CommonModule} from '@angular/common';
import {NavbarModule} from '../../../components/navbar/navbar.module';
import {EnvironmentComponent} from './material-design/environment/environment.component';
import {MaterialPropertiesComponent} from './material-design/material-properties/material-properties.component';
import {ElevationShadowsComponent} from './material-design/elevation-shadows/elevation-shadows.component';
import {ToolbarModule} from '../../../components/toolbar/toolbar.module';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    GuidelinesRoutingModule,

    // Avengers Component
    CommonModule,
    GridModule,
    TabstripModule,
    ButtonModule,
    PopupModule,
    DropdownModule,
    MenuModule,
    MegamenuModule,
    PanelbarModule,
    PanelModule,
    NavbarModule,
    TextboxModule,
    CheckboxModule,
    ToolbarModule,
  ],
  exports: [
    GuidelinesComponent
  ],
  declarations: [
    GuidelinesComponent,
    IntroductionComponent,
    EnvironmentComponent,
    MaterialPropertiesComponent,
    ElevationShadowsComponent,
  ],
  providers: [],
})
export class GuidelinesModule {
}
