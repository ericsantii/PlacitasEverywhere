import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {UserPage} from '../user/user'

/**
 * Generated class for the ProductPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-product',
  templateUrl: 'product.html',
})
export class ProductPage {

  product;
  quantity: number;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.product = this.navParams.get('product');
    console.log(this.product);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductPage');
  }

  addToCart(product){
    //add to cart
  }

  goToSeller(sellerID){
    this.navCtrl.push(UserPage, 
      {user: {
        firstName : 'Fernando',
        lastName : 'Ortiz',
        userID : 'Forzzark',
        pictureURI: 'sdsdfg'

      }}
  );

  }
  gotToHarvestLand(harvestLandID){


  }
}
