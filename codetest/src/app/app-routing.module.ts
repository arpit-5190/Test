import { EnrolleeDetailsComponent } from './enrollee-details/enrollee-details.component';
import { InActiveEnrolleesComponent } from './in-active-enrollees/in-active-enrollees.component';
import { ActiveEnrolleesComponent } from './active-enrollees/active-enrollees.component';
import { EnrolleesComponent } from './enrollees/enrollees.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotfoundComponent } from './notfound/notfound.component';


const routes: Routes = [
  { path:'', redirectTo:'/enrollees', pathMatch:'full' },
  { path:'enrollees', component:EnrolleesComponent},
  { path:'active', component:ActiveEnrolleesComponent},
  { path:'inactive', component:InActiveEnrolleesComponent},
  { path:'detail/:id', component:EnrolleeDetailsComponent},
  { path:'**', component:NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
