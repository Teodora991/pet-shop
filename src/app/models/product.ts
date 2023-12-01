export interface ProductSummary {
  id: number;
  name: string;
  images: string[];
  shortDescription: string;
  longDescription: string;
  price: number;
  type: string;
  averageRating: number;
  addedToCart: boolean;
  ratings: number[];
}

export class Product implements ProductSummary {
  id: number;
  name: string;
  images: string[];
  shortDescription: string;
  longDescription: string;
  price: number;
  type: string;
  averageRating: number;
  addedToCart: boolean;
  ratings: number[];

  constructor(
    options: {
      id?: number;
      name?: string;
      images?: string[];
      shortDescription?: string;
      longDescription?: string;
      price?: number;
      type?: string;
      averageRating?: number;
      addedToCart?: boolean;
      ratings?: number[];
    } = {}
  ) {
    this.id = options.id || Math.random();
    this.name = options.name || '';
    this.images = options.images || [];
    this.shortDescription = options.shortDescription || '';
    this.longDescription = options.longDescription || '';
    this.price = options.price || 0;
    this.type = options.type || '';
    this.averageRating = options.averageRating || 0;
    this.addedToCart = options.addedToCart || false;
    this.ratings = options.ratings || [];
  }
}
