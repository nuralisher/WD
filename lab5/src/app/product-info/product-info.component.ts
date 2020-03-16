import { Component, OnInit } from '@angular/core';

import {product , Product, allProducts} from '../products';

import { ProductServiceService } from '../product-service.service';
import {ActivatedRoute} from '@angular/router'

@Component({
  selector: 'app-product-info',
  templateUrl: './product-info.component.html',
  styleUrls: ['./product-info.component.css']
})
export class ProductInfoComponent implements OnInit {
  product = product;

  constructor(private route:ActivatedRoute ,private productService:ProductServiceService) { }

  share(product: Product):void {
    window.alert(`The ${product.name} has been shared!`);
  }

  onNotify(product: Product){
    alert(`You will be notified when the  ${product.name} goes on sale`)
  }
  
  getProduct():void{
    this.productService.getProduct().subscribe(product=>this.product=product);
  }

  ngOnInit(): void {
    this.selectProduct();
  }

  selectProduct(){
    const id = this.route.snapshot.paramMap.get('productID');
    this.productService.getProductById(id).subscribe(allProducts=>this.product = allProducts);
  }

}
