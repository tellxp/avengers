import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
// import {CommonModule} from '../../components/core/widget.module';
// import {GridModule} from '../../components/grid/grid.module';
// import {TabstripModule} from '../../components/tabstrip/tabstrip.module';
// import {ButtonModule} from '../../components/button/button.module';
// import {PopupModule} from '../../components/popup/popup.module';
// import {DropdownModule} from '../../components/dropdown/dropdown.module';
// import {MenuModule} from '../../components/menu/menu.module';
// import {MegamenuModule} from '../../components/megamenu/megamenu.module';
// import {PanelbarModule} from '../../components/panelbar/panelbar.module';
// import {PanelModule} from '../../components/panel/panel.module';
import {RoutebarModule} from '../../components/navbar/routebar.module';
import {AppExampleRoutingModule} from './app-example-routing.module';
import {AppExampleComponent} from './app-example.component';
// import {LoginExampleComponent} from './login/login-example.component';
// import {HomeExampleComponent} from './home/home-example.component';
// import {GridExampleComponent} from './grid/grid-example.component';
// import {TextboxModule} from '../../components/textbox/textbox.module';
// import {CheckboxModule} from '../../components/checkbox/checkbox.module';
import {FormsModule} from '@angular/forms';
// import {DashboardExampleComponent} from './dashboard/dashboard-example.component';


@NgModule({
    imports: [
      BrowserModule,
      BrowserAnimationsModule,
      AppExampleRoutingModule,
      FormsModule,

      // Avengers Component
      // CommonModule,
      // GridModule,
      // TabstripModule,
      // ButtonModule,
      // PopupModule,
      // DropdownModule,
      // MenuModule,
      // MegamenuModule,
      // PanelbarModule,
      // PanelModule,
      // RoutebarModule,
      // TextboxModule,
      // CheckboxModule,
    ],
    exports: [
      AppExampleComponent,
      // HomeExampleComponent,
      // LoginExampleComponent,
      // GridExampleComponent,
      // DashboardExampleComponent,
    ],
    declarations: [
      AppExampleComponent,
      // HomeExampleComponent,
      // LoginExampleComponent,
      // GridExampleComponent,
      // DashboardExampleComponent,

    ],
    providers: [
    ],
})
export class AppExampleModule { }
