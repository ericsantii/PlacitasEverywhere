import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Schedule } from '../../Models/Schedule';

/*
  Generated class for the ScheduleFactoryProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ScheduleFactoryProvider {
 schedule:Schedule;
  constructor(public http: HttpClient) {
    console.log('Hello ScheduleFactoryProvider Provider');
  }
createSchedule(day,openh,closeh){
  this.schedule = {
    days:day,
    openh:openh,
    closeh:closeh,
  }
  return this.schedule;
}

}
