import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TabstripDemo} from './demo/tabstrip/tabstrip-demo.component';
import {ButtonDemo} from './demo/button/button-demo.component';
import {PopupDemo} from './demo/popup/popup-demo.component';
import {DropdownDemo} from './demo/dropdown/dropdown-demo.component';
import {MenuDemo} from './demo/menu/menu-demo.component';
import {HomeDemo} from './demo/home/home-demo.component';
import {MegamenuDemo} from './demo/megamenu/megamenu-demo.component';
import {PanelbarDemo} from './demo/panelbar/panelbar-demo.component';
import {PanelDemo} from './demo/panel/panel-demo.component';


const appRoutes: Routes = [
  {path: '', component: HomeDemo},
  {path: 'tabstrip-demo', component: TabstripDemo},
  {path: 'button-demo', component: ButtonDemo},
  {path: 'popup-demo', component: PopupDemo},
  {path: 'dropdown-demo', component: DropdownDemo},
  {path: 'menu-demo', component: MenuDemo},
  {path: 'megamenu-demo', component: MegamenuDemo},
  {path: 'panelbar-demo', component: PanelbarDemo},
  {path: 'panel-demo', component: PanelDemo},

];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}
