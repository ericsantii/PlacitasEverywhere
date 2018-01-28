import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProductPage } from '../product/product';

/**
 * Generated class for the SellingPointPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-selling-point',
  templateUrl: 'selling-point.html',
})
export class SellingPointPage {

  sellingPoint;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.sellingPoint = this.navParams.get('sellingPoint');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SellingPointPage');
  }

  openProductPage(product){
    this.navCtrl.push(ProductPage, product);
  }
}
