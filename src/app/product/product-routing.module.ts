import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RemoveProductComponent } from './remove-product/remove-product.component';
import { ViewProductComponent } from './view-product/view-product.component';

const routes: Routes = [
  {
    path: '',
    component: RemoveProductComponent
  },
  {
    path: 'view/:id',
    component: ViewProductComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
