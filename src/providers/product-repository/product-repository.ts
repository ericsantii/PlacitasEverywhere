import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../../Models/Product';
import { stringify } from '@angular/compiler/src/util';

/*
  Generated class for the ProductRepositoryProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ProductRepositoryProvider {
  url: string;
  product: Product

  constructor(public http: HttpClient) {
    console.log('Hello ProductRepositoryProvider Provider');
    this.url = 'http://localhost:3005/api/products';
  }
  postP(product) {
    console.log("AtCreateAccount")

    const req = this.http.post(this.url, JSON.stringify(product)).subscribe(
      res => {
        console.log(res);
      },
      err => {
        console.log("Error Ocurred");
      }
    )
  }


}
