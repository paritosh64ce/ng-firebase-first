import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from "app/shared/auth.service";

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit, OnDestroy {

  userloggedIn: boolean = false;
  userEmail: boolean = false;
  subscription: any;

  constructor(private authSvc: AuthService) { }

  ngOnInit() {
    this.subscription = this.authSvc.eventAuthUpdated.subscribe(() => {
      this.userloggedIn = this.authSvc.userLoggedIn;
      this.userEmail = this.authSvc.loggedInUser ? this.authSvc.loggedInUser.email : null;
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
