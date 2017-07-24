import { Injectable } from '@angular/core';
import { 
  CanActivate,
  Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot 
} from '@angular/router';

import * as firebase from 'firebase';
import { Hero } from 'app/shared/models/Hero';
import { AppConst } from 'app/shared/app.const';

@Injectable()
export class HeroService {
  
  dbRef: firebase.database.Reference = firebase.database().ref(this.appConst.heroRefString);

  constructor(private appConst: AppConst) { }

  createHero(hero: Hero) {
    const newHero = this.dbRef.push();
    newHero.set({
      id: newHero.key,
      name: hero.name,
      description: hero.description
    })
  }

  updateHero(hero: Hero) {
    this.dbRef.child(hero.id).update({ name: hero.name, description: hero.description });
  }

  getHeroes() {
    const dbRef = firebase.database().ref(this.appConst.heroRefString);
    return dbRef.once('value');
    // .then((snapshot)=> {
    //     let tmp: string[] = snapshot.val();
    //     this.blogPosts = Object.keys(tmp).map(key => tmp[key])
    // });
  }

}
