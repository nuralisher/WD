import { Component } from '@angular/core';

import { products ,Product} from '../products';

import { Input } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})

export class ProductListComponent {
  products = products;

  share(product: Product):void {
    window.alert(`The ${product.name} has been shared!`);
  }

  onNotify(product: Product){
    alert(`You will be notified when the  ${product.name} goes on sale`)
  }
}