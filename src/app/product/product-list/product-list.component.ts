import { Component, OnInit } from '@angular/core';
import { ProductModel } from '../../Models/product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  isNeedToRender: boolean;
  isNeedToRenderView: boolean;
  productList: ProductModel[] = [];
  StockAvaibility: string = 'InStock'

  checkboxesDataList = [
    {
      id: 'C001',
      label: 'Price (less than 1000)',
      isChecked: false,
      value: 1000
    },
    {
      id: 'C002',
      label: 'Price (grater than 1000)',
      isChecked: false,
      value: 2000
    },
    {
      id: 'C003',
      label: 'Rating (0-3)',
      isChecked: false,
      value: 3
    },
    {
      id: 'C004',
      label: 'Rating (4-5)',
      isChecked: false,
      value: 5
    },
    {
      id: 'C005',
      label: 'Available In Ahmedabad',
      isChecked: false,
      value: 'Ahmedabad'
    },
    {
      id: 'C006',
      label: 'Available In Surat',
      isChecked: false,
      value: 'Surat'
    },
    {
      id: 'C007',
      label: 'Available In Patan',
      isChecked: false,
      value: 'Patan'
    }
  ]
  constructor() { }

  ngOnInit() {
    this.fillProductList();
  }

  addProduct(): void {
    this.isNeedToRender = true;
  }  

  fillProductList(): void {
    let productDetails = localStorage.getItem('ProductDetails');
    if (productDetails) {
      this.productList = JSON.parse(productDetails);
      this.productList = this.productList.filter(f => f.isRemoved === false);
    }
  }

  removeProduct(productId: number): void {
    let productDetails = localStorage.getItem('ProductDetails');
    if (productDetails) {
      let productList: ProductModel [] = JSON.parse(productDetails);
      let index: number = productList.findIndex(f=>f.ProductId === productId);
      if (index > -1) {
        productList[index].isRemoved = true;
        localStorage.setItem('ProductDetails', JSON.stringify( productList));
        this.fillProductList();
      }
    }
  }

  closedEvent(event: boolean): void {
    this.isNeedToRender = false;
    this.isNeedToRenderView = false;
    this.fillProductList();
  }

  changeSelection(): void {
    let selectedFilter =  this.checkboxesDataList.filter(f=>f.isChecked === true);
    let productDetails = localStorage.getItem('ProductDetails');
    selectedFilter.forEach(element => {
      if (productDetails) {
        this.productList = JSON.parse(productDetails);
        this.productList = this.productList.filter(f => f.isRemoved === false);
        switch (element.id) {
            case 'C001':
            
            break;
            case 'C002':
            
            break;
            case 'C003':
            
            break;
            case 'C004':
            
            break;
            case 'C001':
            
            break;
            case 'C001':
            
            break;
            case 'C001':
            
            break;
        
          default:
            break;
        }
  
      }
    });

   
    
  }
}
