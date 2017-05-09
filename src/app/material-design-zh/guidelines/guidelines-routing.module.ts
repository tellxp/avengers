import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {GuidelinesComponent} from './guidelines.component';
import {IntroductionComponent} from './material-design/introduction/introduction.component';


const appRoutes: Routes = [
  {
    path: 'guidelines', component: GuidelinesComponent,
    children: [
      {path: '', component: IntroductionComponent},
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
