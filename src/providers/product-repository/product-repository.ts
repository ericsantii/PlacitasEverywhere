import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../../Models/Product';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the ProductRepositoryProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ProductRepositoryProvider {
  url: string;
  product: Product

  constructor(public http: Http) {
    console.log('Hello ProductRepositoryProvider Provider');
    this.url = 'http://24.48.230.114:3005';
  }

  postProduct(product:Product) {
    const headers = new Headers();
    console.log(product);
    headers.append('Content-Type', 'application/json');
    let options = new RequestOptions({ headers: headers });
    const req = this.http.post(this.url + '/api/products', JSON.stringify(product), options)
    .map((res) => res.json())
    .subscribe(
      res => {
        console.log(res);
      },
      err => {
        console.log("Error Ocurred");
      }
    )
  }

  searchProductsMatching(input){
    
    return this.http.get(this.url + '/api/product/name/' + input)
    .map((res) => res.json())

  }

  getProductsFrom(userID){
    return this.http.get(this.url + '/api/product/seller/' + userID)
    .map((res) => res.json())
  }

  updateProduct(newProduct){
    const headers = new Headers();
    console.log(newProduct);
    headers.append('Content-Type', 'application/json');
    let options = new RequestOptions({ headers: headers });
    const req = this.http.put(this.url + '/api/product/id/' + newProduct._id, JSON.stringify(newProduct), options)
    .map((res) => res.json())
    .subscribe(
      res => {
        console.log(res);
      },
      err => {
        console.log("Error Ocurred");
      }
    )
  }

  deleteProduct(product){
    return this.http.delete(this.url + '/api/product/' + product._id)
    .map((res) => res.json()).subscribe(
      res=>{
        console.log(res)
      }
    )
  }

}
