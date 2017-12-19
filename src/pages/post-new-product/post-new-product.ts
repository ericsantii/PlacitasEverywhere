import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the PostNewProductPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-post-new-product',
  templateUrl: 'post-new-product.html',
})
export class PostNewProductPage {
  productName:string;
  pictureURI:string;
  harvestLand:string;
  pricingOption:string;
  price:number;


  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PostNewProductPage');
  }

  postProduct(){
    //
  }
}
