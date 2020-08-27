import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { ViewProductComponent } from './product/view-product/view-product.component';
import { RemoveProductComponent } from './product/remove-product/remove-product.component';

const FullRoutes: Routes = [
  {
    path: 'dashboard',
    loadChildren: './dashboard/dashboard.module#DashboardModule'
  },
  {
    path: 'trash',
    loadChildren: './product/product.module#ProductModule'
  },
  {
    path: 'product',
    loadChildren: './product/product.module#ProductModule'
  }
];

const appRoutes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: '', component: MainLayoutComponent, children: FullRoutes },
  { path: '**', redirectTo: '/dashboard', pathMatch: 'full' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
