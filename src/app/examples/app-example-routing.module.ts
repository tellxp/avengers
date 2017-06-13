import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AppExampleComponent} from './app-example.component';
import {LoginExampleComponent} from './login/login-example.component';
import {HomeExampleComponent} from './home/home-example.component';
import {GridExampleComponent} from './grid/grid-example.component';
import {DashboardExampleComponent} from './dashboard/dashboard-example.component';


const appExampleRoutes: Routes = [
  {
    path: 'example', component: AppExampleComponent,
    children: [
      // {path: '', component: HomeExampleComponent},
      // {path: 'login', component: LoginExampleComponent},
      // {path: 'grid', component: GridExampleComponent},
      // {path: 'dashboard', component: DashboardExampleComponent},
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appExampleRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppExampleRoutingModule {
}
