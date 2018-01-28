import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Product } from '../../Models/Product';
import { ProductFactoryProvider } from '../../providers/product-factory/product-factory';
import { ProductRepositoryProvider } from '../../providers/product-repository/product-repository';
import { query } from '@angular/core/src/animation/dsl';
import { HarvestLandRepositoryProvider } from '../../providers/harvest-land-repository/harvest-land-repository';
import { HarvestLandFactoryProvider } from '../../providers/harvest-land-factory/harvest-land-factory';


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
  product : Product;
  userHarvestLands = []
  

  constructor(public navCtrl: NavController, public navParams: NavParams, public productFactory: ProductFactoryProvider, public productRepository: ProductRepositoryProvider, public harvestLandRepository :HarvestLandRepositoryProvider, public harvestLandFactory: HarvestLandFactoryProvider) {
    this.harvestLandRepository.getHarvestLandsFromUser(localStorage.getItem('loggedInID')).toPromise().then(
      res =>
    { 
      this.userHarvestLands = this.harvestLandFactory.createHarvestLandsFromJSON(res);
      console.log('userharvestlands:',this.userHarvestLands)
      
    },
  
    err => {
      console.log(err);
    });
    console.log(this.userHarvestLands);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PostNewProductPage');
  }

  postProduct(name, productType, pictureURI, harvestLandID, pricingOption, pricePerUnit) {
    this.product = this.productFactory.createProduct(name, pictureURI, harvestLandID,pricingOption,pricePerUnit, productType, localStorage.getItem('loggedInID'), null);
    this.productRepository.postProduct(this.product);
  }
}
