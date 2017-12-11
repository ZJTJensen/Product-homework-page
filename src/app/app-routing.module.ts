import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EditComponent } from './edit/edit.component';
import { NewComponent } from './new/new.component';
import { ProductComponent } from './product/product.component';

const routes: Routes = [
  { 
    path: '', 
    pathMatch: 'full', 
    component: HomeComponent 
  },
  { 
    path: 'Product/New', 
    pathMatch: 'full', 
    component: NewComponent 
  },
  { 
    path: 'Product', 
    pathMatch: 'full', 
    component: ProductComponent 
  },
  { 
    path: 'Product/Edit/:i', 
    component: EditComponent 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
