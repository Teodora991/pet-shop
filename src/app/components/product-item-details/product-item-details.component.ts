import { Component, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { DialogService, ProductService } from '../../services';
import { Product, ProductSummary } from '../../models';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { FormatPricePipe } from '../../pipes/format-price.pipe';
import { StarRatingComponent } from '../star-rating/star-rating.component';
import { CarouselComponent } from '../../carousel/carousel.component';

@Component({
  selector: 'app-product-item-details',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule,
    MatGridListModule,
    MatDividerModule,
    MatIconModule,
    FormatPricePipe,
    StarRatingComponent,
    CarouselComponent,
  ],
  templateUrl: './product-item-details.component.html',
  styleUrl: './product-item-details.component.scss',
})
export class ProductItemDetailsComponent implements OnDestroy {
  activeRoute$: Subscription;
  productData: ProductSummary = new Product();

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private router: Router,
    private dialogService: DialogService
  ) {
    this.activeRoute$ = this.route.params.subscribe((params) => {
      const productId = +params['id'];
      this.productData =
        this.productService.getProductById(productId) || new Product();
    });
  }

  ngOnDestroy() {
    this.activeRoute$.unsubscribe();
  }

  onDelete() {
    if (this.productData.id) {
      this.dialogService
        .deleteProductConfirmation()
        .afterClosed()
        .subscribe((isConfirmed) => {
          if (!isConfirmed) return;
          this.productService.deleteProduct(this.productData.id);
          this.router.navigate(['/products']);
        });
    }
  }
  updateProductRating(rating: number) {
    if (!this.productData?.id) return;
    this.productService.updateRating(this.productData.id, rating);
    this.productData =
      this.productService.getProductById(this.productData.id) || new Product();
  }

  addToCart() {
    if (!this.productData.addedToCart)
      this.productService.addProductToCart(this.productData.id);
    this.productData =
      this.productService.getProductById(this.productData.id) || new Product();
  }

  editProduct() {
    this.dialogService
      .editProduct(this.productData)
      .afterClosed()
      .subscribe((product: Product) => {
        if (!product) return;
        this.productService.editProduct(product);
        this.productData =
          this.productService.getProductById(product.id) || new Product();
      });
  }
}
