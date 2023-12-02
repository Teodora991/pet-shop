import { Injectable, signal } from '@angular/core';
import { User } from '../models';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  mockData: User[] = [
    new User({
      korisnickoIme: 'petar',
      lozinka: 'petar123',
      email: 'ppetrovic@webd.com',
      ime: 'Petar',
      prezime: 'Petrovic',
      datumRodjenja: '1994-10-22',
      adresa: 'Gogoljeva 39, Novi Sad,21000',
      telefon: '061-456-456',
    }),
    new User({
      korisnickoIme: 'jovana',
      lozinka: 'jovana123',
      email: 'jjovanovic@webd.com',
      ime: 'Jovana',
      prezime: 'Jovanovic',
      datumRodjenja: '1982-05-05',
      adresa: 'Jug Bogdana 14, Zrenjanin,350902',
      telefon: '062-321-4321',
    }),
    new User({
      korisnickoIme: 'filip',
      lozinka: 'filip123',
      email: 'ffilipovic@webd.com',
      ime: 'Filip',
      prezime: 'Filipovic',
      datumRodjenja: '1973-03-10',
      adresa: 'Solunska 5, Novi Sad, 21000',
      telefon: '064-1459-159',
    }),
    new User({
      korisnickoIme: 'marko',
      lozinka: 'marko123',
      email: 'mmarkovic@webd.com',
      ime: 'Marko',
      prezime: 'Markovic',
      datumRodjenja: '1990-09-17',
      adresa: 'Cara Lazara 9a, Beograd,11000',
      telefon: '063-876-7876',
    }),
    new User({
      korisnickoIme: 'tijana',
      lozinka: 'tijana123',
      email: 'ttijanic@webd.com',
      ime: 'Tijana',
      prezime: 'Tijanic',
      datumRodjenja: '1998-06-29',
      adresa: 'Ružićeva 32, Zrenjanin, 350902',
      telefon: '065-753-753',
    }),
  ];

  users = signal<User[]>(this.mockData);

  constructor() {}

  deleteUser(username?: string) {
    if (!username) return;
    this.users.update((users) =>
      users.filter((user) => user.korisnickoIme !== username)
    );
  }

  addUser(user: User) {
    if (!user?.korisnickoIme) return;
    this.users.update((users) => [user, ...users]);
  }

  editUser(username: string, updatedUser: User) {
    if (!username) return;
    const updatedUsers = this.users().map((user) => {
      if (user.korisnickoIme === username) {
        return { ...updatedUser };
      }
      return user;
    });
    this.users.set(updatedUsers);
  }

  getUserByUsername(username?: string) {
    if (!username) return;
    return this.users().find((user) => user.korisnickoIme === username);
  }
}
