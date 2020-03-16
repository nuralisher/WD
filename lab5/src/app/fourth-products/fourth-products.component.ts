import { Component, OnInit } from '@angular/core';
import {product,productCategory,Product ,Categories} from '../products';
import { ProductServiceService } from '../product-service.service';
import { ActivatedRoute} from '@angular/router'

@Component({
  selector: 'app-fourth-products',
  templateUrl: './fourth-products.component.html',
  styleUrls: ['./fourth-products.component.css']
})
export class FourthProductsComponent implements OnInit {

  constructor(private route : ActivatedRoute, private productService:ProductServiceService) { }

  // products=productCategory;
  selectedCategory:any;


  share(product: Product):void {
    window.alert(`The ${product.name} has been shared!`);
  }

  onNotify(product: Product){
    alert(`You will be notified when the  ${product.name} goes on sale`)
  }

  ngOnInit(): void {
    this.selectProducts();
  }

  selectProducts():void{
    const id = this.route.snapshot.paramMap.get('categoryId');
    this.productService.getCategory(id).subscribe(categories=>this.selectedCategory = categories);
  }

  // selectProduct(selectedProduct):void{
  //   product.name = selectedProduct.name;
  //   product.price = selectedProduct.price;
  //   product.description = selectedProduct.description;
  //   product.rating = selectedProduct.rating;
  //   product.link = selectedProduct.link;
  //   product.img = selectedProduct.img;
  //   product.categoryID = selectedProduct.categoryID;
  //   product.productID = selectedProduct.productID;
  // }

  // getProductCategory():void{
  //   this.productService.getProductCategory().subscribe(productCategory=>this.products=productCategory);
  // }

}
