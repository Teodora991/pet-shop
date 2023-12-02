import { Injectable, computed, signal } from '@angular/core';
import { Product, ProductSummary } from '../models';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  mockData: ProductSummary[] = [
    new Product({
      id: 1,
      naziv: 'Plišanac',
      slike: [
        'https://www.oddoigracke.rs/kategorije/53/Plisane-zivotinje-1.jpg',
        'https://www.aksa.rs/files/thumbs/files/images/slike_proizvoda/thumbs_350/A066162_350_350px.jpg',
        'https://mamibebe-c1c3.kxcdn.com/wp-content/uploads/2023/02/HO2678-580x580.jpg',
        'https://www.malidrugari.rs/imgProizvodi/992/velika%20plisana%20igracka%20majmuncic.jpeg',
      ],
      kratakOpis: 'Plišana igračka za Vašeg člana porodice.',
      detaljanOpis:
        'Izrazito meke, plišane igračke raznih boja, koje služe kao jastuk ili igračka, postaće Vašem ljubimcu omiljena stvar koju će da nosi po kući. Dužina 30 cm, težina 7g.',
      cena: 1300,
      tip: 'Food',
      prosecnaOcena: 3.4,
      uKorpi: false,
      ocene: [4, 5, 4, 2, 1, 5, 4, 3, 3],
    }),
    new Product({
      id: 2,
      naziv: 'Transporter Nomad',
      slike: [
        'https://static.ananas.rs/assets/categories/pet_shop/psi/Oprema_za_pse/transporteri_za_pse.jpg',
        'https://www.petshop-x.hr/admin/uploads/products/thumbs/thumb2_trotter_2.png',
        'https://www.pet-centar.hr/BinaryLibrary/9e18c5cf-c979-4ffb-8c42-1fd4919c0181/Resized_7802e59e-6add-47f0-9281-260d6c423313/220_220.jpg',
      ],
      kratakOpis: 'Transporter Nomad za AVIO transport, XXX Large',
      detaljanOpis:
        'Napravljen je od kvalitetne plastike izdržljive za Vašeg ljubimca. Poseduje kvalitetnu ručkicu koja je izrađena da podrži različite težine Vašeg ljubimca. Ima sitne rešetke i obezbeđuje visok protok vazduha za ljubimca. Izrađen je u originalnom obliku u kom će Vaš ljubimac imati dovoljno prostora.',
      cena: 6700,
      tip: 'transporteri',
      prosecnaOcena: 3.4,
      uKorpi: false,
      ocene: [4, 5, 4, 2, 1, 5, 4, 3, 3],
    }),
    new Product({
      id: 3,
      naziv: 'CURVER Transporter PetLife Rattan',
      kratakOpis: 'Plastični transporter za putovanja bilo koje vrste',
      detaljanOpis:
        'Napravljen je od kvalitetne plastike izdržljive za Vašeg ljubimca. Poseduje kvalitetnu ručkicu koja je izrađena da podrži različite težine Vašeg ljubimca. Ima rupice koje obezbeđuju visok protok vazduha za ljubimca. Izrađen je u obliku korpe, sa rešetkama iznad koje dodatno omogućavaju protok vazduha i osvjetljenosti za Vašeg ljubimca.',
      cena: 8099,
      tip: 'transporteri',
      slike: [
        'https://images.onlinepets.com/product-images/catalog/curver_reismand_misty_hond_170590_1500_none.jpg',
        'https://www.mascotaplanet.com/27179/9399.jpg',
        'https://content.rozetka.com.ua/goods/images/big_tile/242700491.jpg',
      ],
      prosecnaOcena: 3.4,
      ocene: [4, 5, 4, 2, 1, 5, 4, 3, 3],

      uKorpi: false,
    }),
    new Product({
      id: 4,
      naziv: 'DentaStix',
      kratakOpis: 'Poslastica DentaStix Large Breed za žvakanje',
      detaljanOpis:
        'Dodatna hrana za mlade pse i pse velikih pasmina preko 4 meseca starosti, preko 25 kg. Idealno je prilagoðena zubalu velikih rasa. Svojim jedinstvenim sastavom, oblikom i mehanizmom delovanja temeljito čisti zube i desni. DentaStix je jednostavna, a istovremeno ukusna dnevna njega. Temeljito čisti zube i desni te smanjuje mogućnost nastanka kamenca čak do 80%.',
      cena: 320,
      tip: 'poslastice',
      slike: [
        'https://i.cbc.ca/1.4548890.1519404511!/fileImage/httpImage/171350002.jpg',
        'https://www.rover.com/blog/wp-content/uploads/iStock-1355303263-960x540.jpg',
        'https://spallandharveyanimalhospital.ca/wp-content/uploads/2022/09/dog-dentistry-1024x670.jpeg',
      ],
      prosecnaOcena: 3.4,
      ocene: [4, 5, 4, 2, 1, 5, 4, 3, 3],
      uKorpi: false,
    }),
    new Product({
      id: 5,
      naziv: 'TRIXIE',
      kratakOpis:
        'Crna čokolada, izrazito bogata vlaknima i proteinima za Vašeg psa kao najbolja poslastica.',
      detaljanOpis:
        'U sastav ulaze mleko i mlečni proizvodi (42%), šećer, ulje i biljne masnoće, te kakao. Uputstvo za hranjenje: nevno možete dozirati 2-6 komadića, zavisno od veličine psa prilikom šetnje, kao nagradu ili kao energetski dodatak uobičajenom obroku.',
      cena: 250,
      tip: 'poslastice',
      slike: [
        'https://annandalevets.com.au/wp-content/uploads/2018/11/download-1000x675.jpeg',
        'https://thesavvysitter.org/wp-content/uploads/2023/01/image.png',
        'https://addictedtodates.com/wp-content/uploads/2019/01/vegan-milk-chocolate-recipe-500x375.jpg',
      ],
      uKorpi: false,
      prosecnaOcena: 3.4,
      ocene: [4, 5, 4, 2, 1, 5, 4, 3, 3],
    }),
    new Product({
      id: 6,
      naziv: 'PAWISE Mahalica',
      kratakOpis:
        'Omiljena igračka za Vašeg omiljenog ljubimca. Štap koji hrabri mačke na lov.',
      detaljanOpis:
        'Drveni štap, dužine 47cm, izduženom igračkom na kraju. Igračka je zakačena na crnu špagu, dužine 20 cm, tako da se lagano prilagođava svakom pokretu. Igračke dolaze u raznim bojama.',
      cena: 809,
      tip: 'igracke',
      slike: [
        'https://www.pet-centar.rs/cdn/shop/files/all4paws_whisker_fiesta_igracka_za_macka_mahalica_sombrero__109cm_1200x1200.jpg?v=1695893854',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaONLIzd6KNAI5CeeX2UdTzh65GaRxVlnhjJnVHV301DWGNwoMU_XvrOosbUIkZWXKmUg&usqp=CAU',
        'https://shop-cdn-m.mediazs.com/bilder/6/400/368803_pla_ginger_cookie_cat_dangler_fg_3495_6.jpg',
        'https://www.pet-centar.rs/cdn/shop/files/pawise_igracka_za_macke_mahalica_musica_900x.jpg?v=1695894059',
      ],
      uKorpi: false,
      prosecnaOcena: 3.4,
      ocene: [4, 5, 4, 2, 1, 5, 4, 3, 3],
    }),
    new Product({
      id: 7,
      naziv: 'Gourmet',
      kratakOpis: 'Hrana za mačiće',
      detaljanOpis:
        'Potpuna balansirana hrana za mačiće, starosti od 4 do 12 meseci. Royal Canin Kitten je balansirana formula koja prati dinamiku rasta mačića koji se nakon 4-og meseca usporava. Jačanje imuniteta obezbeđuje se jedinstvenim kompleksom antioksidanata (vitamin E i C, lutein, taurin) i manan-oligosaharidima koji stimulišu stvaranje antitela. Održava higijenu usta i zuba nakon izbijanja stalih zubića, usporava stvaranje zubnog kamenca zahvaljujući apsorberu kalcijuma.',
      cena: 3719,
      tip: 'Hrana za macke',
      slike: [
        'https://www.pumpkin.care/wp-content/uploads/2022/11/how-much-to-feed-a-kitten.jpg',
        'https://www.dutch.com/cdn/shop/articles/shutterstock_1789035002.jpg?v=1641503740',
        'https://smb.ibsrv.net/imageresizer/image/blog_images/1200x1200/10087/91160/0447463001544828845.jpg',
      ],
      uKorpi: false,
      prosecnaOcena: 3.4,
      ocene: [4, 5, 4, 2, 1, 5, 4, 3, 3],
    }),
  ];

  selectedId = signal<number | null>(null);
  products = signal<ProductSummary[]>(this.mockData);
  cartItems = computed(() =>
    this.products().filter((product) => product.uKorpi)
  );
  total = computed(() => {
    let total = 0;
    this.cartItems().forEach((item) => {
      total += item.cena;
    });
    return total;
  });

  constructor() {}
  addProductToCart(productId: number) {
    const updatedProducts = this.products().map((product) => {
      if (product.id === productId) {
        return { ...product, uKorpi: true };
      }
      return product;
    });
    this.products.set(updatedProducts);
  }

  updateRating(productId: number, rating: number) {
    const updatedProducts = this.products().map((product) => {
      if (product.id === productId) {
        const updatedRatings = [...product.ocene, rating];
        const sum = updatedRatings.reduce(
          (accumulator, currentValue) => accumulator + currentValue,
          0
        );
        const updatedAverage = parseFloat(
          (sum / updatedRatings.length).toFixed(2)
        );
        return {
          ...product,
          ocene: updatedRatings,
          prosecnaOcena: updatedAverage,
        };
      }
      return product;
    });
    this.products.set(updatedProducts);
  }

  removeProductFromCart(productId: number) {
    const updatedProducts = this.products().map((product) => {
      if (product.id === productId) {
        return { ...product, uKorpi: false };
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
