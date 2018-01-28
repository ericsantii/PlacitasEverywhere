import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SignUpPage } from '../sign-up/sign-up';
import { HomePage } from '../home/home';
import { AuthenticationServiceProvider } from '../../providers/authentication-service/authentication-service';

/**
 * Generated class for the SignInPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sign-in',
  templateUrl: 'sign-in.html',
})
export class SignInPage {
  
  userID:string;
  password:string;


  constructor(public navCtrl: NavController, public navParams: NavParams, public authService:AuthenticationServiceProvider) {
    this.userID = localStorage.getItem('loggedInID');
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignInPage');
  }

  goToSignUpPage(){
    this.navCtrl.push(SignUpPage);
    console.log('Sign Up Button Clicked.');

  }
  signIn(userID, password){
      this.authService.authenticateUser(userID,password);
    
  }
  notSignedIn(){
    return localStorage.getItem('loggedInID') == null;
  }
  signOut(){
    localStorage.clear();
  }
}
