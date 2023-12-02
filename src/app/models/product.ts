export interface ProductSummary {
  id: number;
  naziv: string;
  slike: string[];
  kratakOpis: string;
  detaljanOpis: string;
  cena: number;
  tip: string;
  prosecnaOcena: number;
  uKorpi: boolean;
  ocene: number[];
}

export class Product implements ProductSummary {
  id: number;
  naziv: string;
  slike: string[];
  kratakOpis: string;
  detaljanOpis: string;
  cena: number;
  tip: string;
  prosecnaOcena: number;
  uKorpi: boolean;
  ocene: number[];

  constructor(
    options: {
      id?: number;
      naziv?: string;
      slike?: string[];
      kratakOpis?: string;
      detaljanOpis?: string;
      cena?: number;
      tip?: string;
      prosecnaOcena?: number;
      uKorpi?: boolean;
      ocene?: number[];
    } = {}
  ) {
    this.id = options.id || Math.random();
    this.naziv = options.naziv || '';
    this.slike = options.slike || [];
    this.kratakOpis = options.kratakOpis || '';
    this.detaljanOpis = options.detaljanOpis || '';
    this.cena = options.cena || 0;
    this.tip = options.tip || '';
    this.prosecnaOcena = options.prosecnaOcena || 0;
    this.uKorpi = options.uKorpi || false;
    this.ocene = options.ocene || [];
  }
}
