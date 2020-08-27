import { Component, OnInit, Output,  EventEmitter } from '@angular/core';
import { ProductModel, ImageSnippet } from '../../Models/product.model';
import { NgForm } from '@angular/forms';
import { Input } from '@angular/core';

@Component({
  selector: 'app-add-edit-product',
  templateUrl: './add-edit-product.component.html',
  styleUrls: ['./add-edit-product.component.css']
})
export class AddEditProductComponent implements OnInit {
  title: string = 'Edit Product';
  productModel: ProductModel;  
  imageSnippet: ImageSnippet = new ImageSnippet();
  @Input() productId: number = 0;
  @Output() closedEvent: EventEmitter<boolean> = new EventEmitter<boolean>(false);
  constructor() { }

  ngOnInit() {
    if(this.productId == 0)
     {
       this.title = 'Add Product';
       this.productModel = new ProductModel();
     } else {
      this.title = 'Edit Product';
      this.productModel = new ProductModel();
      let productDetails = localStorage.getItem('ProductDetails');
      if (productDetails) {
        let productList: ProductModel [] = JSON.parse(productDetails);
        this.productModel = productList.find(f=>f.ProductId === this.productId);
      }
     }
  }

  onSubmit(form: NgForm): void {
    if (form.valid) {
    let productList: ProductModel[] = [];
    let productDetails = localStorage.getItem('ProductDetails');
    if (this.productId === 0) {
      if (productDetails) {
        productList = JSON.parse(productDetails);
        this.productModel.ProductId = productList.length + 1;
        //this.productModel.ImageUrl = this.imageSnippet.src;
        this.productModel.isRemoved = false;
        productList.push(this.productModel);
      } else {
        this.productModel.ProductId = 1;
       // this.productModel.ImageUrl = this.imageSnippet.src;
        this.productModel.isRemoved = false;
        productList.push(this.productModel);
      }
      localStorage.setItem('ProductDetails', JSON.stringify(productList));
    } else {
      productList = JSON.parse(productDetails);
      let index: number = productList.findIndex(f => f.ProductId === this.productId);
      if (index > -1) {
        productList[index].ProductId = this.productId;
        productList[index].ProductTitle = this.productModel.ProductTitle;
        productList[index].Description = this.productModel.Description;
        productList[index].ImageUrl = this.productModel.ImageUrl;
        productList[index].Price = this.productModel.Price;
        productList[index].Rating = this.productModel.Rating;
        productList[index].AvailableLocation = this.productModel.AvailableLocation;
        productList[index].StockAvaibility = this.productModel.StockAvaibility;
        productList[index].isRemoved = false;
        localStorage.setItem('ProductDetails', JSON.stringify(productList));
      }
    }  
    this.closedEvent.emit(true);
  }
  }

  onStockChange(value: string): void {
    this.productModel.StockAvaibility = value;
  }

  processFile(imageInput: any) {
    const file: File = imageInput.files[0];
    const reader = new FileReader();
    reader.addEventListener('load', (event: any) => {
      this.imageSnippet.src = event.target.result;
      this.imageSnippet.Image = file;
    });
    reader.readAsDataURL(file);
  }
}
