import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MySellingPointsPage } from './my-selling-points';

@NgModule({
  declarations: [
    MySellingPointsPage,
  ],
  imports: [
    IonicPageModule.forChild(MySellingPointsPage),
  ],
})
export class MySellingPointsPageModule {}
