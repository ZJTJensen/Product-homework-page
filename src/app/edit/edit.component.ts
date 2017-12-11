import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { Product } from '../product';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  constructor(private _serviceService: ServiceService, private _route: ActivatedRoute, private _router: Router) { 
    this._route.paramMap.subscribe( params => {
      let i = params.get('i');

    })
  }
  product: any[]=[];
  myProduct = new Product();
  delete(){
    let i = this._serviceService.index;
    console.log(this.product)
    this.product.splice(i,1)
    this._router.navigate(['Product'])
  }
  editProduct(){
    let i = this._serviceService.index;

    this._serviceService.editProduct(this.myProduct, i)
    this.myProduct = new Product()
    this._router.navigate(['Product'])
  }

  ngOnInit() {
    this.product = this._serviceService.products;
  }

}
