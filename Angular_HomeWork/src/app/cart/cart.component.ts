import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { Product } from '../products';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../auth/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  constructor(
    private cartservice: CartService,
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {}

  shoppingCartItems: Product[] = [];

  checkForm = this.fb.group({
    name: [' ', [Validators.required]],
    address: [' ', [Validators.required]],
    email: [
      ' ',
      [
        Validators.required,
        Validators.pattern(/^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/),
      ],
    ],
    consignee: ['', [Validators.required]],
  });

  ngOnInit(): void {
    const auth = this.authService.getAuth();
    if (auth != 'joold') {
      alert('請先進首頁登入');
      this.router.navigate(['/login']);
    } else {
      this.shoppingCartItems = this.cartservice.getCartItems();
      this.checkForm.reset();
    }
  }

  clearCartItem(productId: number) {
    this.shoppingCartItems = this.cartservice.clearCartItem(productId);
    // this.shoppingCartItems = this.cartservice.getCartItems();
  }

  onSubmit(): void {
    console.warn(
      'Your ordeer has been sunmited!!',
      this.shoppingCartItems,
      this.checkForm.value
    );
    this.shoppingCartItems = this.cartservice.emptyShoppingCart();
    this.checkForm.reset();
  }
}
