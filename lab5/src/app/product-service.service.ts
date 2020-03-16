import { Injectable } from '@angular/core';
import {product ,productCategory, Product,categories , allProducts} from './products';
import { Observable, of } from 'rxjs';
 
@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  categories = categories;
  allProducts = allProducts;

  constructor() { }

  getProduct():Observable<Product>{
    return of(product);
  }

  getCategory(id):Observable<any>{
    const neededCat = this.categories.find(category=>category.id==id);
    return of(neededCat);
  }

  getProductById(id):Observable<any>{
    const neededPro = this.allProducts.find(product=>product.productID==id);
    return of(neededPro);
  }

  // getProductCategory():Observable<Product[]>{
  //   return of(productCategory);
  // }
}
