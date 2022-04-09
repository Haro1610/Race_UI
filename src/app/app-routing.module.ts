import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { UsersComponent } from './pages/users/users.component';
import { DriversComponent } from './pages/drivers/drivers.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { RacesComponent } from './pages/races/races.component';
import { RaceResultsComponent } from './pages/race-results/race-results.component';
import { SingupComponent } from './pages/singup/singup.component';

const routes: Routes = [
  {path: '',redirectTo:'login', pathMatch:'full'},
  {path: 'login',component:LoginComponent},
  {path:'singup',component:SingupComponent},
  {path: 'users',component:UsersComponent},
  {path: 'drivers',component:DriversComponent},
  {path: 'races',component:RacesComponent},
  {path: 'races-results',component:RaceResultsComponent},
  {path: '**',component:NotFoundComponent,pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
 }
