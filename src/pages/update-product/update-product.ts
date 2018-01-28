import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Product } from '../../Models/Product';
import { ProductFactoryProvider } from '../../providers/product-factory/product-factory';
import { ProductRepositoryProvider } from '../../providers/product-repository/product-repository';

/**
 * Generated class for the UpdateProductPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-update-product',
  templateUrl: 'update-product.html',
})
export class UpdateProductPage {
  product:Product;
  constructor(public navCtrl: NavController, public navParams: NavParams, public productFactory: ProductFactoryProvider, public productRepository: ProductRepositoryProvider) {
    this.product = this.navParams.get('producto');
    

    
    
   

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UpdateProductPage');
  }

  updateProduct(name, type, pictureURI, harvestLand, pricingOption, pricePerUnit ){
    var newProduct = this.productFactory.createProduct(name, pictureURI, harvestLand,pricingOption, pricePerUnit, type, localStorage.getItem('loggedInID'), this.product._id);
    this.productRepository.updateProduct(newProduct);
  }

}
