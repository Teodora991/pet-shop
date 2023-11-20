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
        title: 'Потврда уклањања производа',
        message: 'Да ли сте сигурни да желите да уклоните производ из корпе?',
      },
    });
  }

  deactivateUserConfirmation() {
    return this.dialog.open(ConfirmationDialogComponent, {
      width: '400px',
      enterAnimationDuration: this.defaultEnterAnimationDuration,
      exitAnimationDuration: this.defaultExitAnimationDuration,
      data: {
        title: 'Потврда деактивације налога',
        message:
          'Да ли сте сигурни да желите да деактивирате кориснички налог?',
      },
    });
  }

  deleteProductConfirmation() {
    return this.dialog.open(ConfirmationDialogComponent, {
      width: '400px',
      enterAnimationDuration: this.defaultEnterAnimationDuration,
      exitAnimationDuration: this.defaultExitAnimationDuration,
      data: {
        title: 'Потврда брисања производа',
        message: 'Да ли сте сигурни да желите да избришете производ?',
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
        data: { creator: creator, title: 'Креирање корисничког налога' },
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
      data: { item: user, title: 'Измена података о кориснику' },
    });
  }

  createProduct() {
    this.dialog
      .open(ProductEditorComponent, {
        width: '500px',
        enterAnimationDuration: this.defaultEnterAnimationDuration,
        exitAnimationDuration: this.defaultExitAnimationDuration,
        data: { title: 'Додај производ' },
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
      data: { item: product, title: 'Измена података о производу' },
    });
  }
}
