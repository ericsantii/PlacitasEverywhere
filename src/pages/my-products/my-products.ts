import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Product } from '../../Models/Product';
import { PostNewProductPage } from '../post-new-product/post-new-product';
import { UpdateProductPage } from '../update-product/update-product';
import { AssignProductsPage } from '../assign-products/assign-products';
import { ProductRepositoryProvider } from '../../providers/product-repository/product-repository';
import { ProductFactoryProvider } from '../../providers/product-factory/product-factory';

/**
 * Generated class for the MyProductsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-my-products',
  templateUrl: 'my-products.html',
})
export class MyProductsPage {

  myproducts:Product[];

  constructor(public navCtrl: NavController, public navParams: NavParams, public productRepository:ProductRepositoryProvider, public productFactory:ProductFactoryProvider) {
    this.productRepository.getProductsFrom(localStorage.getItem('loggedInID')).toPromise().then(
      (res) => {
        this.myproducts = this.productFactory.createProductsFromJSON(res);
        
      },
      err => {
        console.log("Error Ocurred");
      }
    );
     
  }

 

  ionViewDidLoad() {
    console.log('ionViewDidLoad MyProductsPage');
  }

  updateProduct(product){

    this.navCtrl.push(UpdateProductPage, {producto:product});
  }

  deleteProduct(product){
    
    this.productRepository.deleteProduct(product);
  }

}
