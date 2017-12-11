import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(private _serviceService: ServiceService) { }
  product: any[]=[];

  delete(i){
    this.product.splice(i,1)
  }
  ngOnInit(){
    this.product = this._serviceService.products;
  }
  info(i){
   this._serviceService.index = i;
  }

}
