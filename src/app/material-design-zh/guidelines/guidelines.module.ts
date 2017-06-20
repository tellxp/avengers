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
import {RoutebarModule} from '../../../components/navbar/routebar.module';
import {EnvironmentComponent} from './material-design/environment/environment.component';

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
    RoutebarModule,
    TextboxModule,
    CheckboxModule,
  ],
  exports: [
    GuidelinesComponent
  ],
  declarations: [
    GuidelinesComponent,
    IntroductionComponent,
    EnvironmentComponent,
  ],
  providers: [],
})
export class GuidelinesModule {
}
