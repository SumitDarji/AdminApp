import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductListComponent } from '../product/product-list/product-list.component';
import { AddEditProductComponent } from '../product/add-edit-product/add-edit-product.component';
import { FormsModule } from '@angular/forms';
import { ViewProductComponent } from './view-product/view-product.component';
import { RemoveProductComponent } from './remove-product/remove-product.component';
import { ProductRoutingModule } from './product-routing.module';
import { RouterModule } from '@angular/router';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ProductRoutingModule
  ],
  declarations: [ProductListComponent, AddEditProductComponent, ViewProductComponent, RemoveProductComponent],
  exports:[ProductListComponent, AddEditProductComponent, ViewProductComponent, RemoveProductComponent]
})
export class ProductModule { }
