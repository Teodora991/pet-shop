import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { PetShopService, DialogService, ProductService } from '../../services';
import { RouterModule } from '@angular/router';
import { MatBadgeModule } from '@angular/material/badge';
import { MatMenuModule } from '@angular/material/menu';

@Component({
  selector: 'app-navigation-bar',
  standalone: true,
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    RouterModule,
    MatBadgeModule,
    MatMenuModule,
  ],
  templateUrl: './navigation-bar.component.html',
  styleUrl: './navigation-bar.component.scss',
})
export class NavigationBarComponent {
  petShop = this.petShopService.petShop;
  cartItems = this.productService.cartItems;

  constructor(
    private dialogService: DialogService,
    private petShopService: PetShopService,
    private productService: ProductService
  ) {}

  onLogin(): void {
    this.dialogService.login();
  }
}
