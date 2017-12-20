import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HarvestPage } from './harvest';

@NgModule({
  declarations: [
    HarvestPage,
  ],
  imports: [
    IonicPageModule.forChild(HarvestPage),
  ],
})
export class HarvestPageModule {}
