import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from '../../services';
import { ProductItemSummaryComponent } from '../product-item-summary/product-item-summary.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { FormatPricePipe } from '../../pipes/format-price.pipe';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-shopping-cart',
  standalone: true,
  imports: [
    CommonModule,
    ProductItemSummaryComponent,
    MatGridListModule,
    FormatPricePipe,
    MatButtonModule,
    RouterModule,
  ],
  templateUrl: './shopping-cart.component.html',
  styleUrl: './shopping-cart.component.scss',
})
export class ShoppingCartComponent {
  constructor(public productService: ProductService) {}
}
