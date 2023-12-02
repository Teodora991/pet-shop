export interface UserSummary {
  korisnickoIme: string;
  lozinka: string;
  email: string;
  ime: string;
  prezime: string;
  datumRodjenja?: string;
  adresa: string;
  telefon: string;
}

export class User implements UserSummary {
  korisnickoIme: string;
  lozinka: string;
  email: string;
  ime: string;
  prezime: string;
  datumRodjenja?: string;
  adresa: string;
  telefon: string;

  constructor(
    options: {
      korisnickoIme?: string;
      lozinka?: string;
      email?: string;
      ime?: string;
      prezime?: string;
      datumRodjenja?: string;
      adresa?: string;
      telefon?: string;
    } = {}
  ) {
    this.korisnickoIme = options.korisnickoIme || '';
    this.lozinka = options.lozinka || '';
    this.email = options.email || '';
    this.ime = options.ime || '';
    this.prezime = options.prezime || '';
    this.datumRodjenja = options.datumRodjenja || undefined;
    this.adresa = options.adresa || '';
    this.telefon = options.telefon || '';
  }
}
