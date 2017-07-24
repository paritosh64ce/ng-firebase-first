import { Component, OnInit } from '@angular/core';
import { HeroService } from 'app/shared/hero.service';
import { Hero } from 'app/shared/models/Hero';
import { AppConst } from 'app/shared/app.const';

import * as firebase from 'firebase';
import { AuthService } from "app/shared/auth.service";

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.css']
})
export class HeroListComponent implements OnInit {

  heroList: Hero[] = [];
  userLoggedIn: boolean = false;
  currentHero: Hero = null;

  constructor(private heroSvc: HeroService, private appConst: AppConst, private authSvc: AuthService) { }

  addNewHero() {
    this.currentHero = new Hero('', '');
  }
  saveHero() {
    if(this.currentHero.id) {
      this.heroSvc.updateHero(this.currentHero);
    } else {
      this.heroSvc.createHero(new Hero(this.currentHero.name, this.currentHero.description));
    }
    this.getHeroes();
    this.currentHero = null;
  }

  getHeroes() {
    let dbRef = firebase.database().ref(this.appConst.heroRefString);
    dbRef.once('value')
      .then((snapshot) => {
          const tmp: string[] = snapshot.val();
          const heroes = Object.keys(tmp).map(key => tmp[key]);
          this.heroList = heroes;
        });

  }
  ngOnInit() {
    this.getHeroes();    
    this.userLoggedIn = this.authSvc.userLoggedIn;
  }

}
