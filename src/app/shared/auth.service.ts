import { Injectable, OnInit, EventEmitter } from '@angular/core';

import * as firebase from 'firebase';
import { Hero } from 'app/shared/models/Hero';
import { 
  CanActivate,
  Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot 
} from "@angular/router";
import { AppConst } from "app/shared/app.const";

@Injectable()
export class AuthService implements CanActivate {

  loggedInUser: any = null;
  userLoggedIn: boolean = false;
  eventAuthUpdated = new EventEmitter();


  constructor(private router: Router, private appConst: AppConst) {  }

  register(email: string, password: string) {
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(result => this.updateLogin(result) )
      .catch(this.errorHandler);
  }

  login(email: string, password: string) {
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(result => this.updateLogin(result))
      .catch(this.errorHandler);
  }

  updateLogin = function (user) {
    this.loggedInUser = user;
    this.userLoggedIn = (user != null);
    if(this.userLoggedIn){
      this.router.navigate(['']);
    }
    this.eventAuthUpdated.emit();
  }

  verifyLogin(url: string) {
    if(this.userLoggedIn) { return true; }
    else {
      this.router.navigate(['login']);
      return false;
    }
  }

  verifyUser() {
    this.loggedInUser = firebase.auth().currentUser;
    if(this.loggedInUser) {
      this.userLoggedIn = true;
      this.router.navigate(['/hero-list']);
    } else{
      this.router.navigate(['/login']);
    }
  }

  logout() {
    firebase.auth().signOut().then(() => {
      this.updateLogin(null);
    });
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
  // | Observable<boolean> | Promise<boolean> {
    let url = state.url;
    return this.verifyLogin(url);
  }

  private errorHandler = (error) => alert(`An error occured: ${error.name} - ${error.message}`);

}
