import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CommonModule} from '../../components/common/common.module';
import {GridModule} from '../../components/grid/grid.module';
import {TabstripModule} from '../../components/tabstrip/tabstrip.module';
import {ButtonModule} from '../../components/button/button.module';
import {PopupModule} from '../../components/popup/popup.module';
import {DropdownModule} from '../../components/dropdown/dropdown.module';
import {MenuModule} from '../../components/menu/menu.module';
import {MegamenuModule} from '../../components/megamenu/megamenu.module';
import {PanelbarModule} from '../../components/panelbar/panelbar.module';
import {PanelModule} from '../../components/panel/panel.module';
import {NavbarModule} from '../../components/navbar/navbar.module';
import {AppExampleRoutingModule} from './app-example-routing.module';
import {AppExampleComponent} from './app-example.component';
import {LoginExampleComponent} from './login/login-example.component';
import {HomeExampleComponent} from './home/home-example.component';
import {GridExampleComponent} from './grid/grid-example.component';
import {TextboxModule} from '../../components/textbox/textbox.module';


@NgModule({
    imports: [
      BrowserModule,
      BrowserAnimationsModule,
      AppExampleRoutingModule,

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
    ],
    exports: [
      AppExampleComponent,
      HomeExampleComponent,
      LoginExampleComponent,
      GridExampleComponent,
    ],
    declarations: [
      AppExampleComponent,
      HomeExampleComponent,
      LoginExampleComponent,
      GridExampleComponent,

    ],
    providers: [
    ],
})
export class AppExampleModule { }
