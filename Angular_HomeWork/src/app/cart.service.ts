import { Injectable } from '@angular/core';
import { Product } from './products';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  items: Product[] = [];

  // product: Product
  addToCart(product: Product): void {
    alert('產品已新增至購物車');
    this.items.push(product);
  }

  getCartItems() {
    return this.items;
  }

  clearCartItem(productId: number) {
    this.items = this.items.filter((item) => item.id !== productId);
    return this.items;
  }

  emptyShoppingCart() {
    this.items = [];
    return this.items;
  }

  constructor() {}
}
