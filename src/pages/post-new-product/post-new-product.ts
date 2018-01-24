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
<<<<<<< HEAD
  product: Product
  
=======
  productName:string;
  pictureURI:string;
  harvestLandID:string;
  pricingOption:string;
  price:number;
>>>>>>> parent of d7dc92d5... Post Product


  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PostNewProductPage');
  }

  postProduct(){
    //
  }
}
