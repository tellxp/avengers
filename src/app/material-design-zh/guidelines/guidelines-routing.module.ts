import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {IntroductionComponent} from './material-design/introduction/introduction.component';
import {GuidelinesComponent} from './guidelines.component';
import {EnvironmentComponent} from './material-design/environment/environment.component';


const appRoutes: Routes = [
  {
    path: 'material-design-zh/guidelines', component: GuidelinesComponent,
    children: [
      {path: '', component: IntroductionComponent},
      {path: 'material-design/introduction', component: IntroductionComponent},
      {path: 'material-design/environment', component: EnvironmentComponent},
    ]
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class GuidelinesRoutingModule {
}
