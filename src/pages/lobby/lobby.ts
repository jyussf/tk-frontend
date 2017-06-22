import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { QuestionPage } from '../question/question';
import { HistoryPage } from '../history/history';
import { LoginPage } from '../login/login';

/**
 * Generated class for the LobbyPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-lobby',
  templateUrl: 'lobby.html',
})
export class LobbyPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LobbyPage');
  }
takeTest(){
  this.navCtrl.push(QuestionPage);
  }
  viewHistory(){
    this.navCtrl.push(HistoryPage);
  }
   logout(){
     this.navCtrl.setRoot(LoginPage);
   }
}


