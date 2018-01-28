import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NewSellingPointPage } from './post-new-selling-point';

@NgModule({
  declarations: [
    NewSellingPointPage,
  ],
  imports: [
    IonicPageModule.forChild(NewSellingPointPage),
  ],
})
export class SellingPointPageModule {}
