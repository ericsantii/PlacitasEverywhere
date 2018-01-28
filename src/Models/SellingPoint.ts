import { Product } from "./Product";
import { Schedule } from "./Schedule";

export interface SellingPoint{
    name:String,
    location:String,
    sellerID:String,
    products:Product[],
    schedule:Schedule[],
    pictureURI:String,
    _id:string


}