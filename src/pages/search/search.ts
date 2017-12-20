import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ProductPage} from '../product/product';
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

  products =[
    {
      productName : 'Aguacate',
      price : '$100.00',
      pictureURI: 'https://www.organicfacts.net/wp-content/uploads/avocado.jpg',
      pricingOption : 'q',
      harvestLandID : '543453',
      sellerID: 'Pepito'

      
    },
    {
      productName : 'Guineo',
      price : '$50.00',
      pictureURI: 'https://www.organicfacts.net/wp-content/uploads/2013/05/Banana3.jpg',
      pricingOption : 'q',
      harvestLandID : '453453',
      sellerID: 'Pepito'
    },
    {
      productName : 'Parcha',
      price : '$75.00',
      pictureURI: 'https://qph.ec.quoracdn.net/main-qimg-fa2ddc3dd7569564b3f77eeca059e045-c',
      pricingOption : 'q',
      harvestLandID : '453453',
      sellerID: 'Pepito'
    },
    {
      productName : 'China',
      price : '$25.00',
      pictureURI : 'https://www.oasis-botanical.ca/wp-content/uploads/2017/02/orange-web.jpg',
      pricingOption : 'p',
      harvestLandID : '453453',
      sellerID: 'Pepito'
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

    openProductPage(item){
      this.navCtrl.push(ProductPage, item);
    }
}
