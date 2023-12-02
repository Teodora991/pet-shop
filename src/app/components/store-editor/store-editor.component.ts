import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { PetShopService } from '../../services';
import { addressFormatValidator } from '../../validators/address-format.validator';

@Component({
  selector: 'app-store-editor',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
  ],
  templateUrl: './store-editor.component.html',
  styleUrl: './store-editor.component.scss',
})
export class StoreEditorComponent {
  storeFormGroup: FormGroup;
  constructor(
    public dialogRef: MatDialogRef<StoreEditorComponent>,
    private fb: FormBuilder,
    private petShopService: PetShopService
  ) {
    this.storeFormGroup = this.fb.group({
      naziv: [this.petShopService.petShop().naziv, [Validators.required]],
      godinaOtvaranja: [
        this.petShopService.petShop().godinaOtvaranja,
        [Validators.required],
      ],
      telefon: [this.petShopService.petShop().telefon, [Validators.required]],
      adresa: [
        this.petShopService.petShop().adresa,
        [Validators.required, addressFormatValidator],
      ],
      logo: [this.petShopService.petShop().logo, [Validators.required]],
    });
  }

  getErrorMessage(fieldName: string) {
    let control = this.storeFormGroup.get(fieldName);
    if (!control || !control.touched) return '';

    if (control.hasError('required')) {
      return 'Potrebno je uneti vrednost';
    }
    if (control.hasError('invalidAddressFormat')) {
      return 'Adresa mora biti u formatu: ulica i br, mesto, poštanski br.';
    }
    return '';
  }

  isFormValid() {
    return this.storeFormGroup.valid;
  }

  isFieldInvalid(fieldName: string): boolean {
    let control = this.storeFormGroup.get(fieldName);

    return control ? control.invalid && control.touched : false;
  }

  onSubmit() {
    if (this.storeFormGroup.valid) {
      this.dialogRef.close(Object.assign({}, this.storeFormGroup.value));
    }
  }
}
