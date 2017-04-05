import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {AppRoutingModule} from './app-routing.module';

import {AppComponent} from './app.component';

import {LayoutModule} from '../components/layout/layout.module';

import {TabstripDemo} from './demo/tabstrip/tabstrip-demo.component';
import {TabstripModule} from '../components/tabstrip/tabstrip.module';
import {ButtonModule} from '../components/button/button.module';
import {ButtonDemo} from './demo/button/button-demo.component';
import {PopupModule} from '../components/popup/popup.module';
import {PopupDemo} from './demo/popup/popup-demo.component';
import {DropdownModule} from '../components/dropdown/dropdown.module';
import {DropdownDemo} from './demo/dropdown/dropdown-demo.component';
import {CommonModule} from '../components/common/common.module';
import {MenuDemo} from './demo/menu/menu-demo.component';
import {MenuModule} from '../components/menu/menu.module';
import {HomeDemoComponent} from './demo/home/home-demo.component';
import {MegamenuDemo} from './demo/megamenu/megamenu-demo.component';
import {MegamenuModule} from '../components/megamenu/megamenu.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {PanelbarDemo} from './demo/panelbar/panelbar-demo.component';
import {PanelbarModule} from '../components/panelbar/panelbar.module';
import {PanelDemoComponent} from './demo/panel/panel-demo.component';
import {PanelModule} from '../components/panel/panel.module';
import {NavbarDemoComponent} from './demo/navbar/navbar-demo.component';
import {NavbarModule} from '../components/navbar/navbar.module';
import {AppDemoModule} from './demo/app-demo.module';
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
