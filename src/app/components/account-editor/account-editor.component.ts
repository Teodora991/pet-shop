import { CommonModule } from '@angular/common';
import { Component, Inject } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import {
  MAT_DIALOG_DATA,
  MatDialogActions,
  MatDialogClose,
  MatDialogRef,
} from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatStepperModule } from '@angular/material/stepper';
import { passwordMatchValidator } from '../../validators/passwords-match.validator';
import { DialogService } from '../../services';
import { DialogData } from '../../models/dialog-data';
import { addressFormatValidator } from '../../validators/address-format.validator';

@Component({
  selector: 'app-account-editor',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    MatStepperModule,
    MatDialogActions,
    MatDialogClose,
  ],
  templateUrl: './account-editor.component.html',
  styleUrl: './account-editor.component.scss',
})
export class AccountEditorComponent {
  userFormGroup: FormGroup;
  accountFormGroup: FormGroup;
  hidePassword = true;
  hideConfirmPassword = true;

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<AccountEditorComponent>,
    private dialogService: DialogService,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {
    this.accountFormGroup = data.item
      ? this.fb.group({
          korisnickoIme: [
            data?.item?.korisnickoIme || '',
            [Validators.required],
          ],
          lozinka: [data?.item?.lozinka || '', [Validators.required]],
        })
      : this.fb.group(
          {
            korisnickoIme: ['', [Validators.required]],
            lozinka: ['', [Validators.required]],
            potvrdiLozinku: ['', [Validators.required]],
          },
          { validators: passwordMatchValidator }
        );

    this.userFormGroup = this.fb.group({
      ime: [data?.item?.ime || '', [Validators.required]],
      prezime: [data?.item?.prezime || '', [Validators.required]],
      telefon: [data?.item?.telefon || '', [Validators.required]],
      adresa: [
        data?.item?.adresa || '',
        [Validators.required, addressFormatValidator],
      ],
      datumRodjenja: [data?.item?.datumRodjenja || null, [Validators.required]],
      email: [data?.item?.email || '', [Validators.required, Validators.email]],
    });
  }

  isFieldInvalid(formGroup: FormGroup, fieldName: string): boolean {
    let control = formGroup.get(fieldName);

    return control ? control.invalid && control.touched : false;
  }

  getErrorMessage(formGroup: FormGroup, fieldName: string) {
    let control = formGroup.get(fieldName);
    if (!control || !control.touched) return '';

    if (control.hasError('required')) {
      return 'Ovo polje je obavezno.';
    }
    if (control.hasError('email')) {
      return 'Neispravan format e-pošte.';
    }

    if (control.hasError('passwordMatch')) {
      return 'Unete lozinke nisu identične.';
    }

    if (control.hasError('invalidAddressFormat')) {
      return 'Adresa mora biti u formatu: ulica i br, mesto, poštanski br.';
    }

    return '';
  }

  login() {
    this.closeDialog();
    this.dialogService.login();
  }

  onSubmit() {
    if (this.userFormGroup.valid && this.accountFormGroup.valid) {
      const output = Object.assign(
        {},
        this.userFormGroup.value,
        this.accountFormGroup.value
      );
      delete output.confirmPassword;
      this.dialogRef.close(output);
    }
  }

  isFormValid(formGroup: FormGroup) {
    return formGroup.valid;
  }

  closeDialog() {
    this.dialogRef.close();
  }
}
