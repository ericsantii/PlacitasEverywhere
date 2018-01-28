import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AssignProductsPage } from './assign-products';

@NgModule({
  declarations: [
    AssignProductsPage,
  ],
  imports: [
    IonicPageModule.forChild(AssignProductsPage),
  ],
})
export class AssignProductsPageModule {}
