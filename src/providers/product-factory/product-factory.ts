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
  product: Product;


  constructor(public http: HttpClient) {
    console.log('Hello ProductFactoryProvider Provider');
  }

  createProduct(name: string, pictureURI: string, harvestLandID: string, sellingPointID: string, pricingOption: string, pricePerUnit: number, sellerID: string) {
    this.product = {
      name: name,
      pictureURI: pictureURI,
      harvestLandID: harvestLandID,
      sellingPointID: sellingPointID,
      pricingOption: pricingOption,
      pricePerUnit: pricePerUnit

    }

  }




}
