import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeroListComponent } from 'app/hero-list/hero-list.component';
import { HomeComponent } from 'app/home/home.component';
import { ErrorComponent } from 'app/shared/error.component';
import { AuthService } from 'app/shared/auth.service';
import { SignupComponent } from 'app/signup/signup.component';
import { LoginComponent } from 'app/login/login.component';

const routes: Routes = [
  { path: 'hero-list', component: HeroListComponent /*, canActivate: [AuthService] */ },
  { path: 'signup', component: SignupComponent },
  { path: 'signout', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: '', component: HomeComponent },
  { path: '**', component: ErrorComponent }
  // { path: '', children: [] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
