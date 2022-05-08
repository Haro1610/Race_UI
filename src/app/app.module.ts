import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { UsersComponent } from './pages/users/users.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { RacesComponent } from './pages/races/races.component';
import { RaceResultsComponent } from './pages/race-results/race-results.component';
import { CircuitsComponent } from './pages/circuits/circuits.component';
import { SingupComponent } from './pages/singup/singup.component';
import { HeaderComponent } from './layout/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './modules/material/material.module';
import { HomeComponent } from './pages/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


//import { ErrorStateMatcher } from '@angular/material/core';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UsersComponent,
    NotFoundComponent,
    RacesComponent,
    RaceResultsComponent,
    CircuitsComponent,
    SingupComponent,
    HeaderComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    NgbModule,
    //ErrorStateMatcher,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
