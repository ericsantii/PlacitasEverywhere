import { Component, Input} from '@angular/core';
import { ReviewFactoryProvider } from '../../providers/review-factory/review-factory';
import { ReviewRepositoryProvider } from '../../providers/review-repository/review-repository';

import { Review } from '../../Models/Review';

/**
 * Generated class for the ReviewFormComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'review-form',
  templateUrl: 'review-form.html'
})
export class ReviewFormComponent {

  text: string;

@Input()
parentsUser : any;  
  
  constructor(public reviewFactory:ReviewFactoryProvider, public reviewRepository:ReviewRepositoryProvider) {
    console.log('Hello ReviewFormComponent Component');
    this.text = 'Hello World';
  }

  postReview(title:string, rating:number,description:string){
    
    var newReview: Review = this.reviewFactory.createReview(title, rating, description, localStorage.getItem('loggedInID'), this.parentsUser.user.userID);
    this.reviewRepository.postReview(newReview);
     
    
  }
}
