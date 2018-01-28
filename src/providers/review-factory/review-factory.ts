import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Review } from '../../Models/Review'
/*
  Generated class for the ReviewFactoryProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ReviewFactoryProvider {

  constructor(public http: HttpClient) {
    console.log('Hello ReviewFactoryProvider Provider');
  }

  createReview(title:string, rating:number, description:string, posterID:string, sellerID:string){
    var review:Review = {
      title : title,
      rating:rating,
      description:description,
      posterID: posterID,
      sellerID:sellerID
    }
    return review
  }
  createReviewsFromJSON(reviews: Review[]){
    var arrayOfReviews:Review[] = [];
    for(var review of reviews){
      arrayOfReviews.push(this.createReview(review.title, review.rating, review.description,review.posterID, review.sellerID));
    }
    return arrayOfReviews;
  }
}
