import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { UserFactoryProvider } from '../../providers/user-factory/user-factory';
import { UserRepositoryProvider } from '../../providers/user-repository/user-repository';
import {User} from '../../Models/User'


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
  user:User;
  constructor(public navCtrl: NavController, public navParams: NavParams, public userFactory:UserFactoryProvider, public userRepository:UserRepositoryProvider) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignUpPage');
  }

  signUp(userID, password, firstName, lastName, email, phone, pictureURI){
    
    this.user= this.userFactory.createUser(firstName, lastName, userID,email, password, phone, pictureURI);
    this.userRepository.saveNewUser(this.user);
  }

}
