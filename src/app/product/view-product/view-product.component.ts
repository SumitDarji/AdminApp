import { Component, OnInit } from '@angular/core';
import { ProductModel } from '../../Models/product.model';
import { Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})
export class ViewProductComponent implements OnInit {
  productinfo: ProductModel = new  ProductModel();
  productId: number = 0;
  ratingstar: number[] = [];
  nonratingstar: number[] = [];
  isNeedToRender: boolean = false; 
  constructor(private route: ActivatedRoute) { 
    this.productId = Number(this.route.snapshot.params['id']);
  }

  ngOnInit() {
    this.getProductInfo();
  }

  getProductInfo(): void {
    let productDetails = localStorage.getItem('ProductDetails');
    if (productDetails) {
      this.ratingstar = [];
      this.nonratingstar = [];
      let productList: ProductModel [] = JSON.parse(productDetails);
      this.productinfo = productList.find(f=>f.ProductId === this.productId);
      for (let i =0; i< this.productinfo.Rating; i++){
        this.ratingstar.push(i);
      }
      const nonratingstar = 5 - this.productinfo.Rating;
      for (let i =0; i< nonratingstar; i++){
        this.nonratingstar.push(i);
      }
    }
  }

  editProduct(): void {
    this.isNeedToRender = true;
  }

  closedEvent(event: boolean): void {
    this.isNeedToRender = false;
    this.getProductInfo();
  }
}
