import { Injectable } from '@angular/core';

@Injectable()
export class ServiceService {
  products = [];
  index = null;
  constructor() { }
  newProduct(myProduct){
    this.products.push(myProduct);
  }
  editProduct(myProduct, i){
    this.products[i] = myProduct
  }

}
