import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {GuidelinesComponent} from './guidelines.component';
import {IntroductionComponent} from './material-design/introduction/introduction.component';


const appRoutes: Routes = [
  {
    path: 'material-design-zh', component: GuidelinesComponent,
    children: [
      {path: 'guidelines', component: IntroductionComponent},
      {path: 'material-design/introduction', component: IntroductionComponent},
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
