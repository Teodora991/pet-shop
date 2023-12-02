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
    'Trg Pavla Stojkovića 12, Nis, 18000',
    '2001',
    this.productService.products(),
    '067-5555-555'
  );
  petShop = signal<PetShop>(this.mockData);
  constructor(private productService: ProductService) {}

  editPetShop(updatedShop: PetShop) {
    this.petShop.set(Object.assign({}, this.petShop(), updatedShop));
  }
}
