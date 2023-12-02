import { Product } from './product';

export interface PetShopSummary {
  id: number;
  naziv: string;
  logo: string;
  adresa: string;
  godinaOtvaranja: string;
  proizvodi: Product[];
  telefon: string;
}

export class PetShop implements PetShopSummary {
  id: number;
  naziv: string;
  logo: string;
  adresa: string;
  godinaOtvaranja: string;
  proizvodi: Product[];
  telefon: string;

  constructor(
    id: number,
    naziv: string,
    logo: string,
    adresa: string,
    godinaOtvaranja: string,
    proizvodi: Product[],
    telefon: string
  ) {
    this.id = id;
    this.naziv = naziv;
    this.logo = logo;
    this.adresa = adresa;
    this.godinaOtvaranja = godinaOtvaranja;
    this.proizvodi = proizvodi;
    this.telefon = telefon;
  }
}
