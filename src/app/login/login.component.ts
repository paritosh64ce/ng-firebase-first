import { Component, OnInit } from '@angular/core';
import { AuthService } from 'app/shared/auth.service';
import { Router } from '@angular/router';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: string;
  password: string;
  
  constructor(private authSvc: AuthService, private router: Router) { }

  login() {
    this.authSvc.login(this.email, this.password);
  }

  signup() {
    this.router.navigate(['signup']);
  }

  ngOnInit() {
    this.authSvc.logout();
  }

}
