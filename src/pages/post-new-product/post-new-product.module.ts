import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PostNewProductPage } from './post-new-product';

@NgModule({
  declarations: [
    PostNewProductPage,
  ],
  imports: [
    IonicPageModule.forChild(PostNewProductPage),
  ],
})
export class PostNewProductPageModule {}
