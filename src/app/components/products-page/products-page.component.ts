import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogService, ProductService } from '../../services';
import { ProductItemSummaryComponent } from '../product-item-summary/product-item-summary.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-products-page',
  standalone: true,
  imports: [
    CommonModule,
    ProductItemSummaryComponent,
    MatGridListModule,
    MatButtonModule,
  ],
  templateUrl: './products-page.component.html',
  styleUrl: './products-page.component.scss',
})
export class ProductsPageComponent {
  products = this.productService.products;
  constructor(
    private productService: ProductService,
    private dialogService: DialogService
  ) {}

  addProduct() {
    this.dialogService.createProduct();
  }
}
