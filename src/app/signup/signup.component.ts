import { Component } from '@angular/core';
import { AuthService } from 'app/shared/auth.service';
import { Router } from "@angular/router";

@Component({
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  email: string;
  password1: string;
  password2: string;
  passwordMatch: boolean = true;

  constructor(private authSvc: AuthService, private router: Router) { }

  signup() {
    this.passwordMatch = (this.password1 === this.password2);
    if(this.passwordMatch) {
      this.authSvc.register(this.email, this.password1);
      this.authSvc.verifyUser();
    } else{

    }
  }

  cancel() {
    this.router.navigate(['']);
  }

}
