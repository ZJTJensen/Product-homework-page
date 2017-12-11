import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { Product } from '../product';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {

  constructor(private _serviceService: ServiceService, private _router: Router) { }

  myProduct = new Product()
  createNewProduct(){
    this._serviceService.newProduct(this.myProduct)
    this.myProduct = new Product()
    this._router.navigate(['Product'])
  }
  

  ngOnInit() {
  }

}
