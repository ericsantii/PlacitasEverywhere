import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SellingPointPage } from './selling-point';

@NgModule({
  declarations: [
    SellingPointPage,
  ],
  imports: [
    IonicPageModule.forChild(SellingPointPage),
  ],
})
export class SellingPointPageModule {}
