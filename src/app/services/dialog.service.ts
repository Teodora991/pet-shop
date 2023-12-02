import { Injectable } from '@angular/core';
import { LoginDialogComponent } from '../components';
import { MatDialog } from '@angular/material/dialog';
import { User } from '../models/user';
import { ConfirmationDialogComponent } from '../components/confirmation-dialog/confirmation-dialog.component';
import { UserService } from './user.service';
import { PetShop, Product } from '../models';
import { StoreEditorComponent } from '../components/store-editor/store-editor.component';
import { AccountEditorComponent } from '../components/account-editor/account-editor.component';
import { ProductEditorComponent } from '../components/product-editor/product-editor.component';
import { ProductService } from './product.service';

@Injectable({
  providedIn: 'root',
})
export class DialogService {
  defaultEnterAnimationDuration = '500ms';
  defaultExitAnimationDuration = '200ms';

  constructor(
    private dialog: MatDialog,
    private userService: UserService,
    private productService: ProductService
  ) {}

  login() {
    this.dialog
      .open(LoginDialogComponent, {
        width: '400px',
        enterAnimationDuration: this.defaultEnterAnimationDuration,
        exitAnimationDuration: this.defaultExitAnimationDuration,
      })
      .afterClosed()
      .subscribe((userData) => {
        console.log('LOGIN', userData);
      });
  }

  removeItemFromCartConfirmation() {
    return this.dialog.open(ConfirmationDialogComponent, {
      width: '400px',
      enterAnimationDuration: this.defaultEnterAnimationDuration,
      exitAnimationDuration: this.defaultExitAnimationDuration,
      data: {
        title: 'Potvrda uklanjanja proizvoda',
        message: 'Da li ste sigurni da želite da uklonite proizvod iz korpe?',
      },
    });
  }

  deactivateUserConfirmation() {
    return this.dialog.open(ConfirmationDialogComponent, {
      width: '400px',
      enterAnimationDuration: this.defaultEnterAnimationDuration,
      exitAnimationDuration: this.defaultExitAnimationDuration,
      data: {
        title: 'Potvrda deaktivacije naloga',
        message:
          'Da li ste sigurni da želite da deaktivirate korisnički nalog?',
      },
    });
  }

  deleteProductConfirmation() {
    return this.dialog.open(ConfirmationDialogComponent, {
      width: '400px',
      enterAnimationDuration: this.defaultEnterAnimationDuration,
      exitAnimationDuration: this.defaultExitAnimationDuration,
      data: {
        title: 'Potvrda brisanja proizvoda',
        message: 'Da li ste sigurni da želite da izbrišete proizvod?',
      },
    });
  }

  editStore(store: PetShop) {
    return this.dialog.open(StoreEditorComponent, {
      width: '500px',
      enterAnimationDuration: this.defaultEnterAnimationDuration,
      exitAnimationDuration: this.defaultExitAnimationDuration,
      data: { item: store },
    });
  }

  createAccount(creator: 'user' | 'admin') {
    this.dialog
      .open(AccountEditorComponent, {
        width: '500px',
        enterAnimationDuration: this.defaultEnterAnimationDuration,
        exitAnimationDuration: this.defaultExitAnimationDuration,
        data: { creator: creator, title: 'Kreiranje korisničkog naloga' },
      })
      .afterClosed()
      .subscribe((user) => {
        this.userService.addUser(user);
      });
  }

  editAccount(user: User) {
    return this.dialog.open(AccountEditorComponent, {
      width: '500px',
      enterAnimationDuration: this.defaultEnterAnimationDuration,
      exitAnimationDuration: this.defaultExitAnimationDuration,
      data: { item: user, title: 'Izmena podataka o korisniku' },
    });
  }

  createProduct() {
    this.dialog
      .open(ProductEditorComponent, {
        width: '500px',
        enterAnimationDuration: this.defaultEnterAnimationDuration,
        exitAnimationDuration: this.defaultExitAnimationDuration,
        data: { title: 'Dodaj proizvod' },
      })
      .afterClosed()
      .subscribe((product) => {
        this.productService.addProduct(product);
      });
  }

  editProduct(product: Product) {
    return this.dialog.open(ProductEditorComponent, {
      width: '500px',
      enterAnimationDuration: this.defaultEnterAnimationDuration,
      exitAnimationDuration: this.defaultExitAnimationDuration,
      data: { item: product, title: 'Izmena podataka o proizvodu' },
    });
  }
}
