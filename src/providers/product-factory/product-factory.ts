import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../../Models/Product';

/*
  Generated class for the ProductFactoryProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ProductFactoryProvider {
  product:Product;

  constructor(public http: HttpClient) {
    console.log('Hello ProductFactoryProvider Provider');
  }
  createProduct(name: string,pictureURI:string,harvestLandID:string,pricingOption:string,pricePerUnit:number, productType:string, sellerID:string, id: string){
    this.product = {
      name: name,
      pictureURI:pictureURI,
      harvestLandID:harvestLandID,
      pricingOption:pricingOption,
      pricePerUnit:pricePerUnit,
      productType:productType,
      sellerID:sellerID,
      _id:id
  
    }
    return this.product;
  }

  createProductFromDB(name: string,pictureURI:string,harvestLandID:string,pricingOption:string,pricePerUnit:number, productType:string, sellerID:string, id:string){
    this.product = {
      name: name,
      pictureURI:pictureURI,
      harvestLandID:harvestLandID,
      pricingOption:pricingOption,
      pricePerUnit:pricePerUnit,
      productType:productType,
      sellerID:sellerID,
      _id:id
  
    }
    return this.product;
  }


  createProductsFromJSON(products){
    var arrayOfProducts:Product[] = [];
    for(var product of products){
      arrayOfProducts.push(this.createProductFromDB(product.name, product.pictureURI,product.harvestLandID, product.pricingOption, product.pricePerUnit, product.productType, product.sellerID, product._id));

    }
    return arrayOfProducts;
  }
  
}
