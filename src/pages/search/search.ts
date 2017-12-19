import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SearchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
})
export class SearchPage {

  items =[
    {
      name : 'Aguacate',
      price : '$100.00',
      uri: 'https://www.organicfacts.net/wp-content/uploads/avocado.jpg'
    },
    {
      name : 'Gandules',
      price : '$50.00',
      uri: 'https://www.organicfacts.net/wp-content/uploads/avocado.jpg'
    },
    {
      name : 'Parcha',
      price : '$75.00',
      uri: 'https://www.organicfacts.net/wp-content/uploads/avocado.jpg'
    },
    {
      name : 'China',
      price : '$25.00',
      uri: 'https://www.oasis-botanical.ca/wp-content/uploads/2017/02/orange-web.jpg'
    }
  ]

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SearchPage');
  }

  onCancel($event){
    //

  }

    onInput($event){
    //
    
    }

}
