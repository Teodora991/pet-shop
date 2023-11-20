import { Routes } from '@angular/router';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { UsersPageComponent } from './components/users-page/users-page.component';
import { ProductsPageComponent } from './components/products-page/products-page.component';
import { AboutPageComponent } from './components/about-page/about-page.component';
import { ProductItemDetailsComponent } from './components/product-item-details/product-item-details.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';

export const routes: Routes = [
  { path: 'products', component: ProductsPageComponent },
  { path: 'products/:id', component: ProductItemDetailsComponent },
  { path: 'users', component: UsersPageComponent },
  { path: 'users/:id', component: UserDetailsComponent },
  { path: 'cart', component: ShoppingCartComponent },
  { path: 'about', component: AboutPageComponent },
  { path: '**', redirectTo: 'about' },
];
