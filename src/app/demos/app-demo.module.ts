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
import {PanelbarDemoComponent} from './panelbar/panelbar-demo.component';
import {PanelDemoComponent} from './panel/panel-demo.component';
import {NavbarDemoComponent} from './navbar/navbar-demo.component';
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
import {NavbarModule} from '../../components/navbar/navbar.module';
import {AppDemoRoutingModule} from './app-demo-routing.module';
import {TextboxModule} from '../../components/textbox/textbox.module';
import {TextboxDemoComponent} from './textbox/textbox-demo.component';
import {FormsModule} from '@angular/forms';
import {CheckboxComponent} from '../../components/checkbox/checkbox.component';
import {CheckboxModule} from '../../components/checkbox/checkbox.module';
import {CheckboxDemoComponent} from './checkbox/checkbox-demo.component';


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
      NavbarModule,
      TextboxModule,
      CheckboxModule,
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
      PanelbarDemoComponent,
      PanelDemoComponent,
      NavbarDemoComponent,
      TextboxDemoComponent,
      CheckboxDemoComponent,
    ],
    providers: [
    ],
})
export class AppDemoModule { }
