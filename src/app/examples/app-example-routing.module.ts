import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AppExampleComponent} from './app-example.component';


const appExampleRoutes: Routes = [
  {
    path: 'example', component: AppExampleComponent,
    children: [
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
