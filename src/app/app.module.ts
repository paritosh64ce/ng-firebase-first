import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AuthService } from './shared/auth.service'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HeroListComponent } from './hero-list/hero-list.component';
import { HomeComponent } from './home/home.component';
import { ErrorComponent } from './shared/error.component';
import { HeroService } from './shared/hero.service';
import { AppConst } from './shared/app.const';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HeroListComponent,
    HomeComponent,
    ErrorComponent,
    LoginComponent,
    SignupComponent
  ],
  imports: [
    FormsModule, // have to import to use ngModel, etc
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    AppConst,
    AuthService,
    HeroService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
