import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeDemoComponent} from './home/home-demo.component';
import {TabstripDemoComponent} from './tabstrip/tabstrip-demo.component';
import {ButtonDemoComponent} from './button/button-demo.component';
import {PopupDemoComponent} from './popup/popup-demo.component';
import {DropdownDemo} from './dropdown/dropdown-demo.component';
import {MenuDemo} from './menu/menu-demo.component';
// import {MegamenuDemo} from './megamenu/megamenu-demo.component';
// import {PanelbarDemoComponent} from './panelbar/panelbar-demo.component';
// import {PanelDemoComponent} from './panel/panel-demo.component';
// import {RoutebarDemoComponent} from './routebar/routebar-demo.component';
// import {TextboxDemoComponent} from './textbox/textbox-demo.component';
// import {CheckboxDemoComponent} from './checkbox/checkbox-demo.component';
// import {NavbarDemoComponent} from './navbar/navbar-demo.component';

import {AppDemoComponent} from './app-demo.component';


const appDemoRoutes: Routes = [
  {
    path: 'demos', component: AppDemoComponent,
    children: [
      {path: '', component: HomeDemoComponent},
      {path: 'home', component: HomeDemoComponent},
      {path: 'tabstrip-demo', component: TabstripDemoComponent},
      {path: 'button-demo', component: ButtonDemoComponent},
      {path: 'popup-demo', component: PopupDemoComponent},
      {path: 'dropdown-demo', component: DropdownDemo},
      {path: 'menu-demo', component: MenuDemo},
      // {path: 'megamenu-demo', component: MegamenuDemo},
      // {path: 'panelbar-demo', component: PanelbarDemoComponent},
      // {path: 'panel-demo', component: PanelDemoComponent},
      // {path: 'routebar-demo', component: RoutebarDemoComponent},
      // {path: 'textbox-demo', component: TextboxDemoComponent},
      // {path: 'checkbox-demo', component: CheckboxDemoComponent},
      // {path: 'navbar-demo', component: NavbarDemoComponent},
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appDemoRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppDemoRoutingModule {
}
