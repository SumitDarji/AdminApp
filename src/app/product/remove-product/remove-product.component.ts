import { Component, OnInit } from '@angular/core';
import { ProductModel } from '../../Models/product.model';

@Component({
  selector: 'app-remove-product',
  templateUrl: './remove-product.component.html',
  styleUrls: ['./remove-product.component.css']
})
export class RemoveProductComponent implements OnInit {

  productList: ProductModel[] = [];
  constructor() { }

  ngOnInit() {
    this.fillProductList();
  }

  fillProductList(): void {
    let productDetails = localStorage.getItem('ProductDetails');
    if (productDetails) {
      this.productList = JSON.parse(productDetails);
      this.productList = this.productList.filter(f => f.isRemoved === true);
    }
  }
  restoreProduct(productId: number): void {
    let productDetails = localStorage.getItem('ProductDetails');
    if (productDetails) {
      let productList: ProductModel[] = JSON.parse(productDetails);
      let index: number = productList.findIndex(f => f.ProductId === productId);
      if (index !== -1) {
        productList[index].isRemoved = false;
        localStorage.setItem('ProductDetails', JSON.stringify(productList));
        this.fillProductList();
      }
    }
  }

  removeProduct(productId: number): void {
    let productDetails = localStorage.getItem('ProductDetails');
    if (productDetails) {
      let productList: ProductModel[] = JSON.parse(productDetails);
      let updateData: ProductModel[]= productList.filter(f => f.ProductId !== productId);
      if (updateData) {
        localStorage.setItem('ProductDetails', JSON.stringify(updateData));
        this.fillProductList();
      }
    }
  }
}
