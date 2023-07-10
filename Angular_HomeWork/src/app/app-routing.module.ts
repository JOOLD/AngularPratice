import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { CartComponent } from './cart/cart.component';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth/auth.guard';
import { EnsureLoginGuard } from './login/ensure-login.guard';

const routes: Routes = [
  { path: '', component: ProductListComponent },
  { path: 'product/:id', component: ProductDetailComponent },
  { path: 'product/:type', component: ProductListComponent },
  { path: 'cart', component: CartComponent },
  {
    path: 'form',
    component: TemplateDrivenFormComponent,
    canActivate: [AuthGuard],
  },
  { path: 'form2', component: ReactiveFormsComponent },
  {
    path: 'login',
    component: LoginComponent,
    canDeactivate: [EnsureLoginGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
