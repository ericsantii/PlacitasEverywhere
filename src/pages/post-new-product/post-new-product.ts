import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Product } from '../../Models/Product';
import { ProductFactoryProvider } from '../../providers/product-factory/product-factory';

/**
 * Generated class for the PostNewProductPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.caca
 */

@IonicPage()
@Component({
  selector: 'page-post-new-product',
  templateUrl: 'post-new-product.html',
})
export class PostNewProductPage {
  product: Product
  

  constructor(public navCtrl: NavController, public navParams: NavParams, public service: ProductFactoryProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PostNewProductPage');
  }

  postProduct(name, pictureURI, harvestLandID, sellingPointID, pricingOption, pricePerUnit) {
    this.product = {
      name,
      pictureURI,
      harvestLandID,
      sellingPointID,
      pricingOption,
      pricePerUnit,
    }
  }
}
