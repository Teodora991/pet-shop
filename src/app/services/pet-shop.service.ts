import { Injectable, signal } from '@angular/core';
import { PetShop } from '../models';
import { ProductService } from './product.service';

@Injectable({
  providedIn: 'root',
})
export class PetShopService {
  mockData = new PetShop(
    1,
    'Magic Paw',
    './assets/images/logo.png',
    '456 Oak Street, Petland',
    2018,
    this.productService.products()
  );
  petShop = signal<PetShop>(this.mockData);
  constructor(private productService: ProductService) {}

  editPetShop(updatedShop: PetShop) {
    this.petShop.set(Object.assign({}, this.petShop(), updatedShop));
  }
}
