import { NgModule }              from '@angular/core';

import{HomeComponent} from'./component/home.component'
import{ServiceListComponent} from'./component/viewServiceRequest.component'
import {RouterModule, Routes} from'@angular/router'


const appRoutes: Routes = [
  { path: 'Home', component: HomeComponent },
   { path: 'ServiceRequest', component: ServiceListComponent },

  { path: '',   redirectTo: '/Home', pathMatch: 'full' }

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