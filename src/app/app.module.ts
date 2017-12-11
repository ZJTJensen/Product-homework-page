import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { EditComponent } from './edit/edit.component';

import { ProductComponent } from './product/product.component';

import { HomeComponent } from './home/home.component';
import { NewComponent } from './new/new.component';
import { ServiceService } from './service.service';




@NgModule({
  declarations: [
    AppComponent,
    EditComponent,
    ProductComponent,
    HomeComponent,
    NewComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
