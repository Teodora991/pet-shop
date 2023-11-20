import { Product } from './product';

export interface PetShopSummary {
  id: number;
  name: string;
  logo: string;
  address: string;
  yearOfOpening: number;
  products: Product[];
}

export class PetShop implements PetShopSummary {
  id: number;
  name: string;
  logo: string;
  address: string;
  yearOfOpening: number;
  products: Product[];

  constructor(
    id: number,
    name: string,
    logo: string,
    address: string,
    yearOfOpening: number,
    products: Product[]
  ) {
    this.id = id;
    this.name = name;
    this.logo = logo;
    this.address = address;
    this.yearOfOpening = yearOfOpening;
    this.products = products;
  }
}
