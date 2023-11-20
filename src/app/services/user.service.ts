import { Injectable, signal } from '@angular/core';
import { User } from '../models';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  mockData: User[] = [
    new User({
      username: 'user1',
      password: 'password1',
      email: 'user1@email.com',
      firstName: 'User',
      lastName: 'One',
      dateOfBirth: new Date('1990-01-01'),
      address: 'Address 1',
      phoneNumber: '123-456-7890',
    }),
    new User({
      username: 'user2',
      password: 'password2',
      email: 'user2@email.com',
      firstName: 'User',
      lastName: 'Two',
      dateOfBirth: new Date('1990-02-02'),
      address: 'Address 2',
      phoneNumber: '123-456-7890',
    }),
    new User({
      username: 'user3',
      password: 'password3',
      email: 'user3@email.com',
      firstName: 'User',
      lastName: 'Three',
      dateOfBirth: new Date('1990-03-03'),
      address: 'Address 3',
      phoneNumber: '123-456-7890',
    }),
    new User({
      username: 'user4',
      password: 'password4',
      email: 'user4@email.com',
      firstName: 'User',
      lastName: 'Four',
      dateOfBirth: new Date('1990-04-04'),
      address: 'Address 4',
      phoneNumber: '123-456-7890',
    }),
    new User({
      username: 'user5',
      password: 'password5',
      email: 'user5@email.com',
      firstName: 'User',
      lastName: 'Five',
      dateOfBirth: new Date('1990-05-05'),
      address: 'Address 5',
      phoneNumber: '123-456-7890',
    }),
    new User({
      username: 'user6',
      password: 'password6',
      email: 'user6@email.com',
      firstName: 'User',
      lastName: 'Six',
      dateOfBirth: new Date('1990-06-06'),
      address: 'Address 6',
      phoneNumber: '123-456-7890',
    }),
    new User({
      username: 'user7',
      password: 'password7',
      email: 'user7@email.com',
      firstName: 'User',
      lastName: 'Seven',
      dateOfBirth: new Date('1990-07-07'),
      address: 'Address 7',
      phoneNumber: '123-456-7890',
    }),
    new User({
      username: 'user8',
      password: 'password8',
      email: 'user8@email.com',
      firstName: 'User',
      lastName: 'Eight',
      dateOfBirth: new Date('1990-08-08'),
      address: 'Address 8',
      phoneNumber: '123-456-7890',
    }),
    new User({
      username: 'user9',
      password: 'password9',
      email: 'user9@email.com',
      firstName: 'User',
      lastName: 'Nine',
      dateOfBirth: new Date('1990-09-09'),
      address: 'Address 9',
      phoneNumber: '123-456-7890',
    }),
    new User({
      username: 'user10',
      password: 'password10',
      email: 'user10@email.com',
      firstName: 'User',
      lastName: 'Ten',
      dateOfBirth: new Date('1990-10-10'),
      address: 'Address 10',
      phoneNumber: '123-456-7890',
    }),
  ];

  users = signal<User[]>(this.mockData);

  constructor() {}

  deleteUser(username?: string) {
    if (!username) return;
    this.users.update((users) =>
      users.filter((user) => user.username !== username)
    );
  }

  addUser(user: User) {
    if (!user?.username) return;
    this.users.update((users) => [user, ...users]);
  }

  editUser(username: string, updatedUser: User) {
    if (!username) return;
    const updatedUsers = this.users().map((user) => {
      if (user.username === username) {
        return { ...updatedUser };
      }
      return user;
    });
    this.users.set(updatedUsers);
  }

  getUserByUsername(username?: string) {
    if (!username) return;
    return this.users().find((user) => user.username === username);
  }
}
