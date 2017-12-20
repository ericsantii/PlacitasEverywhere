import {Injectable} from '@angular/core';
import sellers from "./mock-sellers";

//@Injectable()
export class SellerService {

    findAll() {
        return Promise.resolve(sellers);
    }

    findById(id) {
        return Promise.resolve(sellers[id - 1]);
    }

}
