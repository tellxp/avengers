import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppDemoComponent} from './app-demo.component';
import {HomeDemoComponent} from './home/home-demo.component';
import {TabstripDemo} from './tabstrip/tabstrip-demo.component';
import {ButtonDemo} from './button/button-demo.component';
import {PopupDemo} from './popup/popup-demo.component';
import {DropdownDemo} from './dropdown/dropdown-demo.component';
import {MenuDemo} from './menu/menu-demo.component';
import {MegamenuDemo} from './megamenu/megamenu-demo.component';
import {PanelbarDemo} from './panelbar/panelbar-demo.component';
import {PanelDemoComponent} from './panel/panel-demo.component';
import {NavbarDemoComponent} from './navbar/navbar-demo.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CommonModule} from '../../components/common/common.module';
import {LayoutModule} from '../../components/layout/layout.module';
import {TabstripModule} from '../../components/tabstrip/tabstrip.module';
import {ButtonModule} from '../../components/button/button.module';
import {PopupModule} from '../../components/popup/popup.module';
import {DropdownModule} from '../../components/dropdown/dropdown.module';
import {MenuModule} from '../../components/menu/menu.module';
import {MegamenuModule} from '../../components/megamenu/megamenu.module';
import {PanelbarModule} from '../../components/panelbar/panelbar.module';
import {PanelModule} from '../../components/panel/panel.module';
import {NavbarModule} from '../../components/navbar/navbar.module';
import {AppDemoRoutingModule} from './app-demo-routing.module';
import {TextboxComponent} from '../../components/textbox/textbox.component';
import {TextboxModule} from '../../components/textbox/textbox.module';
import {TextboxDemoComponent} from './textbox/textbox-demo.component';
import {FormsModule} from '@angular/forms';


@NgModule({
    imports: [
      BrowserModule,
      BrowserAnimationsModule,
      FormsModule,
      AppDemoRoutingModule,

      // Avengers Component
      CommonModule,
      LayoutModule,
      TabstripModule,
      ButtonModule,
      PopupModule,
      DropdownModule,
      MenuModule,
      MegamenuModule,
      PanelbarModule,
      PanelModule,
      NavbarModule,
      TextboxModule
    ],
    exports: [
      AppDemoComponent
    ],
    declarations: [
      AppDemoComponent,
      HomeDemoComponent,
      TabstripDemo,
      ButtonDemo,
      PopupDemo,
      DropdownDemo,
      MenuDemo,
      MegamenuDemo,
      PanelbarDemo,
      PanelDemoComponent,
      NavbarDemoComponent,
      TextboxDemoComponent
    ],
    providers: [
    ],
})
export class AppDemoModule { }
