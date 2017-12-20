import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { AccountsProvider } from '../../providers/accounts/accounts';


/**
 * Generated class for the SignUpPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sign-up',
  templateUrl: 'sign-up.html',
})
export class SignUpPage {
  userID:string;
  password:string;
  firstName:string;
  lastName:string;
  email:string;
  phoneNumber:string;
  pictureURI:string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public service:AccountsProvider) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignUpPage');
  }

  signUp(){
    this.service.createAccount(this.firstName, this.lastName, this.userID, this.email, this.password, this.phoneNumber, this.pictureURI);

  }

}
