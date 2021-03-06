import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';

import {AppDemoComponent} from './app-demo.component';
import {HomeDemoComponent} from './home/home-demo.component';
import {TabstripDemoComponent} from './tabstrip/tabstrip-demo.component';
import {ButtonDemoComponent} from './button/button-demo.component';
import {PopupDemoComponent} from './popup/popup-demo.component';
import {DropdownDemo} from './dropdown/dropdown-demo.component';
import {MenuDemo} from './menu/menu-demo.component';
import {MegamenuDemo} from './megamenu/megamenu-demo.component';
import {PanelDemoComponent} from './panel/panel-demo.component';
import {NavbarDemoComponent} from './navbar/navbar-demo.component';


import {GridModule} from '../../components/grid/grid.module';
import {TabstripModule} from '../../components/tabstrip/tabstrip.module';
import {ButtonModule} from '../../components/button/button.module';
import {PopupModule} from '../../components/popup/popup.module';
import {DropdownModule} from '../../components/dropdown/dropdown.module';
import {MenuModule} from '../../components/menu/menu.module';
import {MegamenuModule} from '../../components/megamenu/megamenu.module';
import {PanelModule} from '../../components/panel/panel.module';
import {NavbarModule} from '../../components/navbar/navbar.module';
import {AppDemoRoutingModule} from './app-demo-routing.module';
import {TreeviewModule} from '../../components/treeview/treeview.module';
import {TextboxModule} from '../../components/textbox/textbox.module';
import {TextboxDemoComponent} from './textbox/textbox-demo.component';
import {CheckboxModule} from '../../components/checkbox/checkbox.module';
import {CheckboxDemoComponent} from './checkbox/checkbox-demo.component';
import {ToolbarModule} from '../../components/toolbar/toolbar.module';
import {ToolbarDemoComponent} from './toolbar/toolbar-demo.component';
import {MarkdownModule} from '../../components/markdown/markdown.module';
import {PanelbarModule} from '../../components/panelbar/panelbar.module';
import {PanelbarDemoComponent} from './panelbar/panelbar-demo.component';
import {GridDemoComponent} from './grid/grid-demo.component';


@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    AppDemoRoutingModule,

    // Avengers Component
    GridModule,
    TabstripModule,
    ButtonModule,
    PopupModule,
    DropdownModule,
    MenuModule,
    MegamenuModule,
    PanelbarModule,
    PanelModule,
    ToolbarModule,
    TextboxModule,
    CheckboxModule,
    ToolbarModule,
    MarkdownModule,
    TreeviewModule
  ],
  exports: [
    AppDemoComponent
  ],
  declarations: [
    AppDemoComponent,
    HomeDemoComponent,
    TabstripDemoComponent,
    ButtonDemoComponent,
    PopupDemoComponent,
    DropdownDemo,
    MenuDemo,
    MegamenuDemo,
    PanelbarDemoComponent,
    PanelDemoComponent,
    NavbarDemoComponent,
    TextboxDemoComponent,
    CheckboxDemoComponent,
    ToolbarDemoComponent,
    GridDemoComponent,
  ],
  providers: [],
})
export class AppDemoModule {
}
