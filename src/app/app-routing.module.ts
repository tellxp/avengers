import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TabstripDemo} from  './demo/tabstrip/tabstrip-demo.component'
import {ButtonDemo} from  './demo/button/button-demo.component'


const appRoutes: Routes = [
  { path: 'tabstrip-demo', component: TabstripDemo },
  { path: 'button-demo', component: ButtonDemo },

  ];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
