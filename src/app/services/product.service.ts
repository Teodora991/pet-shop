import { Injectable, computed, signal } from '@angular/core';
import { Product, ProductSummary } from '../models';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  mockData: ProductSummary[] = [
    new Product({
      id: 1,
      name: 'Pet Food',
      images: [
        'https://www.shutterstock.com/image-photo/arrangement-dogpet-toys-260nw-641512969.jpg',
        'https://www.shutterstock.com/image-photo/arrangement-dogpet-toys-260nw-641512969.jpg',
      ],
      shortDescription: 'Healthy pet food',
      longDescription:
        'Nutritious and delicious pet food for your furry friend.',
      price: 10.99,
      type: 'Food',
      averageRating: 4.5,
      addedToCart: false,
      ratings: [5, 4, 5, 4, 5],
    }),
    new Product({
      id: 2,
      name: 'Pet Toy',
      images: [
        'https://www.shutterstock.com/image-photo/arrangement-dogpet-toys-260nw-641512969.jpg',
        'https://www.shutterstock.com/image-photo/arrangement-dogpet-toys-260nw-641512969.jpg',
      ],
      shortDescription: 'Interactive Pet Toy',
      longDescription: 'Keep your pet entertained with this interactive toy.',
      price: 5.99,
      type: 'Toy',
      averageRating: 4.2,
      addedToCart: false,
      ratings: [4, 5, 4, 4, 5],
    }),
    new Product({
      id: 3,
      name: 'Pet Bed',
      images: [
        'https://www.shutterstock.com/image-photo/arrangement-dogpet-toys-260nw-641512969.jpg',
        'https://www.shutterstock.com/image-photo/arrangement-dogpet-toys-260nw-641512969.jpg',
      ],
      shortDescription: 'Comfortable Pet Bed',
      longDescription: 'Provide your pet with a cozy place to rest and sleep.',
      price: 19.99,
      type: 'Accessory',
      averageRating: 4.7,
      addedToCart: false,
      ratings: [5, 5, 4, 5, 4],
    }),
    new Product({
      id: 4,
      name: 'Pet Grooming Kit',
      images: [
        'https://www.shutterstock.com/image-photo/arrangement-dogpet-toys-260nw-641512969.jpg',
        'https://www.shutterstock.com/image-photo/arrangement-dogpet-toys-260nw-641512969.jpg',
      ],
      shortDescription: 'Grooming Kit for Pets',
      longDescription:
        'Essential grooming tools for keeping your pet clean and healthy.',
      price: 15.99,
      type: 'Grooming',
      averageRating: 4.0,
      addedToCart: false,
      ratings: [4, 4, 5, 4, 3],
    }),
    new Product({
      id: 5,
      name: 'Pet Collar',
      images: [
        'https://www.shutterstock.com/image-photo/arrangement-dogpet-toys-260nw-641512969.jpg',
        'https://www.shutterstock.com/image-photo/arrangement-dogpet-toys-260nw-641512969.jpg',
      ],
      shortDescription: 'Stylish Pet Collar',
      longDescription:
        'Add a touch of style to your pet with this fashionable collar.',
      price: 8.99,
      type: 'Accessory',
      averageRating: 4.8,
      addedToCart: false,
      ratings: [5, 5, 4, 5, 5],
    }),
    new Product({
      id: 6,
      name: 'Pet Leash',
      images: [
        'https://www.oddoigracke.rs/kategorije/53/Plisane-zivotinje-1.jpg',
        'https://www.aksa.rs/files/thumbs/files/images/slike_proizvoda/thumbs_350/A066162_350_350px.jpg',
        'https://mamibebe-c1c3.kxcdn.com/wp-content/uploads/2023/02/HO2678-580x580.jpg',
      ],
      shortDescription: 'Durable Pet Leash',
      longDescription:
        'A strong and durable leash for walking your pet with confidence.',
      price: 12.99,
      type: 'Accessory',
      averageRating: 4.6,
      addedToCart: false,
      ratings: [5, 4, 5, 4, 5],
    }),
    new Product({
      id: 7,
      name: 'Pet Treats',
      images: [
        'https://www.shutterstock.com/image-photo/arrangement-dogpet-toys-260nw-641512969.jpg',
        'https://www.shutterstock.com/image-photo/arrangement-dogpet-toys-260nw-641512969.jpg',
        'https://www.shutterstock.com/image-photo/arrangement-dogpet-toys-260nw-641512969.jpg',
        'https://www.shutterstock.com/image-photo/arrangement-dogpet-toys-260nw-641512969.jpg',
      ],
      shortDescription: 'Delicious Pet Treats',
      longDescription: 'Tasty treats to reward and spoil your pet.',
      price: 7.99,
      type: 'Treats',
      averageRating: 4.9,
      addedToCart: false,
      ratings: [5, 5, 5, 5, 5],
    }),
  ];

  selectedId = signal<number | null>(null);
  products = signal<ProductSummary[]>(this.mockData);
  cartItems = computed(() =>
    this.products().filter((product) => product.addedToCart)
  );
  total = computed(() => {
    let total = 0;
    this.cartItems().forEach((item) => {
      total += item.price;
    });
    return total;
  });

  constructor() {}
  addProductToCart(productId: number) {
    const updatedProducts = this.products().map((product) => {
      if (product.id === productId) {
        return { ...product, addedToCart: true };
      }
      return product;
    });
    this.products.set(updatedProducts);
  }

  updateRating(productId: number, rating: number) {
    const updatedProducts = this.products().map((product) => {
      if (product.id === productId) {
        const updatedRatings = [...product.ratings, rating];
        const sum = updatedRatings.reduce(
          (accumulator, currentValue) => accumulator + currentValue,
          0
        );
        const updatedAverage = parseFloat(
          (sum / updatedRatings.length).toFixed(2)
        );
        return {
          ...product,
          ratings: updatedRatings,
          averageRating: updatedAverage,
        };
      }
      return product;
    });
    this.products.set(updatedProducts);
  }

  removeProductFromCart(productId: number) {
    const updatedProducts = this.products().map((product) => {
      if (product.id === productId) {
        return { ...product, addedToCart: false };
      }
      return product;
    });
    this.products.set(updatedProducts);
  }

  deleteProduct(id?: number) {
    if (!id) return;
    this.products.update((products) =>
      products.filter((product) => product.id !== id)
    );
  }

  getProductById(id?: number) {
    if (!id) return;
    return this.products().find((product) => product.id === id);
  }

  addProduct(product: Product) {
    if (!product) return;
    this.products.update((products) => [product, ...products]);
  }

  editProduct(updatedProduct: Product) {
    if (!updatedProduct?.id) return;
    const updatedProducts = this.products().map((product) => {
      if (product.id === updatedProduct.id) {
        return { ...product, ...updatedProduct };
      }
      return product;
    });
    this.products.set(updatedProducts);
  }
}
