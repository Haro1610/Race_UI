import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { UsersComponent } from './pages/users/users.component';
import { DriversComponent } from './pages/drivers/drivers.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { RacesComponent } from './pages/races/races.component';
import { RaceResultsComponent } from './pages/race-results/race-results.component';
import { CircuitsComponent } from './pages/circuits/circuits.component';
import { SingupComponent } from './pages/singup/singup.component';
import { HeaderComponent } from './layout/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './modules/material/material.module';
//import { ErrorStateMatcher } from '@angular/material/core';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UsersComponent,
    DriversComponent,
    NotFoundComponent,
    RacesComponent,
    RaceResultsComponent,
    CircuitsComponent,
    SingupComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    //ErrorStateMatcher,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
