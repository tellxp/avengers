import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {AppRoutingModule} from './app-routing.module';

import {AppComponent} from './app.component';

import {GridModule} from '../components/grid/grid.module';

import {TabstripDemo} from './demos/tabstrip/tabstrip-demo.component';
import {TabstripModule} from '../components/tabstrip/tabstrip.module';
import {ButtonModule} from '../components/button/button.module';
import {ButtonDemo} from './demos/button/button-demo.component';
import {PopupModule} from '../components/popup/popup.module';
import {PopupDemo} from './demos/popup/popup-demo.component';
import {DropdownModule} from '../components/dropdown/dropdown.module';
import {DropdownDemo} from './demos/dropdown/dropdown-demo.component';
import {CommonModule} from '../components/common/common.module';
import {MenuDemo} from './demos/menu/menu-demo.component';
import {MenuModule} from '../components/menu/menu.module';
import {HomeDemoComponent} from './demos/home/home-demo.component';
import {MegamenuDemo} from './demos/megamenu/megamenu-demo.component';
import {MegamenuModule} from '../components/megamenu/megamenu.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {PanelbarDemo} from './demos/panelbar/panelbar-demo.component';
import {PanelbarModule} from '../components/panelbar/panelbar.module';
import {PanelDemoComponent} from './demos/panel/panel-demo.component';
import {PanelModule} from '../components/panel/panel.module';
import {NavbarDemoComponent} from './demos/navbar/navbar-demo.component';
import {NavbarModule} from '../components/navbar/navbar.module';
import {AppDemoModule} from './demos/app-demo.module';
import {AppExampleComponent} from './examples/app-example.component';
import {AppExampleModule} from './examples/app-example.module';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppDemoModule,
    AppExampleModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
