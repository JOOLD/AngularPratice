import { Component, OnInit } from '@angular/core';
import { products } from '../products';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../cart.service';
import { Product } from '../products';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
})
export class ProductDetailComponent implements OnInit {
  // 產品區
  product!: any;
  products = [...products];
  productId!: number | null;

  constructor(
    private router: ActivatedRoute,
    private cartservice: CartService
  ) {}

  ngOnInit(): void {
    // 這邊寫了兩種方法
    // 第一 根據有產品且 產品型號相同 才顯示
    this.productId = Number(this.router.snapshot.paramMap.get('id'));
    // console.log(this.productId);

    // 第二 有產品( 但前置作業已經先把 不同的產品型號給剃掉了，只留下我要的產品而已 )
    this.product = this.products.find((p) => p.id === this.productId);
    // console.log(this.product);
  }

  addToCart(product: Product): void {
    this.cartservice.addToCart(product);
  }
}
