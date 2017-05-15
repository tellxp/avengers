import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppDemoComponent} from './app-demo.component';
import {HomeDemoComponent} from './home/home-demo.component';
import {TabstripDemo} from './tabstrip/tabstrip-demo.component';
import {ButtonDemoComponent} from './button/button-demo.component';
import {PopupDemoComponent} from './popup/popup-demo.component';
import {DropdownDemo} from './dropdown/dropdown-demo.component';
import {MenuDemo} from './menu/menu-demo.component';
import {MegamenuDemo} from './megamenu/megamenu-demo.component';
import {PanelbarDemoComponent} from './panelbar/panelbar-demo.component';
import {PanelDemoComponent} from './panel/panel-demo.component';
import {RoutebarDemoComponent} from './routebar/routebar-demo.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CommonModule} from '../../components/core/widget.module';
import {GridModule} from '../../components/grid/grid.module';
import {TabstripModule} from '../../components/tabstrip/tabstrip.module';
import {ButtonModule} from '../../components/button/button.module';
import {PopupModule} from '../../components/popup/popup.module';
import {DropdownModule} from '../../components/dropdown/dropdown.module';
import {MenuModule} from '../../components/menu/menu.module';
import {MegamenuModule} from '../../components/megamenu/megamenu.module';
import {PanelbarModule} from '../../components/panelbar/panelbar.module';
import {PanelModule} from '../../components/panel/panel.module';
import {RoutebarModule} from '../../components/routebar/routebar.module';
import {AppDemoRoutingModule} from './app-demo-routing.module';
import {TextboxModule} from '../../components/textbox/textbox.module';
import {TextboxDemoComponent} from './textbox/textbox-demo.component';
import {FormsModule} from '@angular/forms';
import {CheckboxModule} from '../../components/checkbox/checkbox.module';
import {CheckboxDemoComponent} from './checkbox/checkbox-demo.component';
import {NavbarModule} from '../../components/navbar/navbar.module';
import {NavbarDemoComponent} from './navbar/navbar-demo.component';


@NgModule({
    imports: [
      BrowserModule,
      BrowserAnimationsModule,
      FormsModule,
      AppDemoRoutingModule,

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
      NavbarModule,
    ],
    exports: [
      AppDemoComponent
    ],
    declarations: [
      AppDemoComponent,
      HomeDemoComponent,
      TabstripDemo,
      ButtonDemoComponent,
      PopupDemoComponent,
      DropdownDemo,
      MenuDemo,
      MegamenuDemo,
      PanelbarDemoComponent,
      PanelDemoComponent,
      RoutebarDemoComponent,
      TextboxDemoComponent,
      CheckboxDemoComponent,
      NavbarDemoComponent,
    ],
    providers: [
    ],
})
export class AppDemoModule { }
