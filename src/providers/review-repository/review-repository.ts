import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Review } from '../../Models/Review';
import { Http,Headers, RequestOptions } from '@angular/http';

/*
  Generated class for the ReviewRepositoryProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ReviewRepositoryProvider {
  url:string;

  constructor(public http: Http) {
    console.log('Hello ReviewRepositoryProvider Provider');
    this.url = 'http://24.48.230.114:3005';
  }

  postReview(review:Review){

    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let options = new RequestOptions({ headers: headers });
    const req = this.http.post(this.url + 'api/reviews' , JSON.stringify(review), options)
    .map((res)=> res.json())
    .subscribe(
      res => {
        console.log(res);
      },
      err => {
        console.log(err);
      });
    
  }
  getReviewsFor(userID){
    return this.http.get(this.url + '/api/reviews/seller/' + userID)
    .map((res) => res.json())

  }
}
