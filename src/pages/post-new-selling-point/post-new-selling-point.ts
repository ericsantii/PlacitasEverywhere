import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SellingPoint } from '../../Models/SellingPoint';
import { SellingPointFactoryProvider } from '../../providers/selling-point-factory/selling-point-factory';
import { SellingPointRepositoryProvider } from '../../providers/selling-point-repository/selling-point-repository';
import { Schedule } from '../../Models/Schedule';
import { ScheduleFactoryProvider } from '../../providers/schedule-factory/schedule-factory';
import { Product } from '../../Models/Product'
/*
 * Generated class for the SellingPointPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-selling-point',
  templateUrl: 'post-new-selling-point.html',
})
export class NewSellingPointPage {
  sellingPoint: SellingPoint;
  schedule: Schedule;


  constructor(public navCtrl: NavController, public navParams: NavParams, public sellingPointFactory: SellingPointFactoryProvider, public sellingPointRepository: SellingPointRepositoryProvider, public scheduleFactory: ScheduleFactoryProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SellingPointPage');
  }
  createSchedule(day, openh, closeh) {
    this.schedule = this.scheduleFactory.createSchedule(day, openh, closeh);
    
  }
  postSellingPoint(name, location, pictureURI) {
    this.sellingPoint = this.sellingPointFactory.createSellingPoint(name, location, localStorage.getItem('loggedInID'), {}, this.schedule, pictureURI, null);
    
    this.sellingPointRepository.postSellingPoint(this.sellingPoint);
  }

}
