import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { Product } from '../../models';
import { MatIconModule } from '@angular/material/icon';
import { DialogService, ProductService } from '../../services';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-product-item-summary',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    RouterModule,
  ],
  templateUrl: './product-item-summary.component.html',
  styleUrl: './product-item-summary.component.scss',
})
export class ProductItemSummaryComponent {
  @Input() product: Product = new Product();

  constructor(
    private productService: ProductService,
    private dialogService: DialogService,
    private router: Router
  ) {}
  addToCart() {
    if (!this.product.uKorpi)
      this.productService.addProductToCart(this.product.id);
  }

  removeFromCart() {
    if (!this.product.uKorpi) return;
    this.dialogService
      .removeItemFromCartConfirmation()
      .afterClosed()
      .subscribe((isConfirmed) => {
        if (!isConfirmed) return;
        this.productService.removeProductFromCart(this.product.id);
      });
  }

  getProductDetails() {
    this.router.navigate(['/products', this.product.id]);
  }
}
