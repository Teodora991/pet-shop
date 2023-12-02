import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { DialogService } from '../../services';

@Component({
  selector: 'app-login-dialog',
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
  templateUrl: './login-dialog.component.html',
  styleUrl: './login-dialog.component.scss',
})
export class LoginDialogComponent {
  hide = true;
  loginFormGroup: FormGroup;

  constructor(
    private dialogService: DialogService,
    public dialogRef: MatDialogRef<LoginDialogComponent>,
    private fb: FormBuilder
  ) {
    this.loginFormGroup = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  getErrorMessage(fieldName: string) {
    let control = this.loginFormGroup.get(fieldName);
    if (!control || !control.touched) return '';

    if (control.hasError('required')) {
      return 'Potrebno je uneti vrednost';
    }
    return '';
  }

  isFormValid() {
    return this.loginFormGroup.valid;
  }

  isFieldInvalid(fieldName: string): boolean {
    let control = this.loginFormGroup.get(fieldName);

    return control ? control.invalid && control.touched : false;
  }

  onSubmit() {
    if (this.loginFormGroup.valid) {
      this.dialogRef.close(Object.assign({}, this.loginFormGroup.value));
    }
  }

  signUp() {
    this.dialogRef.close();
    this.dialogService.createAccount('user');
  }
}
