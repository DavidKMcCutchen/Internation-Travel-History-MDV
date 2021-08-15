import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { TripService } from "@int-travel-history/core-data";
import { TripComponent } from './trip/trip.component';
import { LoginComponent } from "@int-travel-history/ui-login";

const routes: Route[] = [
  {path: '', component: LoginComponent},
  {path: 'trips', component: TripComponent},
  {path: 'login', component: LoginComponent},
  {path: '**', redirectTo: '', pathMatch: 'full'}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingModule { }
