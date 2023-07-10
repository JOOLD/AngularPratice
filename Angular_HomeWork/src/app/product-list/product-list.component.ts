import { Component } from '@angular/core';
import { products } from '../products';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent {
  type!: string | null;

  constructor(private route: ActivatedRoute, private router: Router) {}

  products = [...products];

  phoneList() {
    this.type = 'phone';
    this.filterProductsByType();
  }

  earPhoneList() {
    this.type = 'earphone';
    this.filterProductsByType();
  }

  allProducts() {
    this.products = [...products];
  }

  filterProductsByType() {
    if (this.type) {
      this.products = products.filter((product) => product.type === this.type);
    } else {
      this.products = [...products];
    }
  }
}
