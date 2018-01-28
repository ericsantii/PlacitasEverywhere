import { Product } from "./Product";

export interface CartItem{
    buyerID:string;
	product:Product,
	numOfItems:number,
	_id:string
}