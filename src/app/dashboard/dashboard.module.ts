import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductModule } from '../product/product.module';


@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule,
    ProductModule
  ],
  declarations: [DashboardComponent]
})
export class DashboardModule { }
