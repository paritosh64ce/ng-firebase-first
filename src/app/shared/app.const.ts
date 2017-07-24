import { Injectable } from '@angular/core';
import * as firebase from 'firebase';

@Injectable()
export class AppConst {

  heroRefString = 'heroes';
  authRefString = 'users';

  private config = {
    apiKey: 'AIzaSyC_xODqbm8kInppMiXJteO6U1xDbAhp5R8',
    authDomain: 'angularend2end.firebaseapp.com',
    databaseURL: 'https://angularend2end.firebaseio.com',
    projectId: 'angularend2end',
    storageBucket: 'angularend2end.appspot.com',
    messagingSenderId: '70861865277'
  };

  constructor() {
      firebase.initializeApp(this.config);
  }

}