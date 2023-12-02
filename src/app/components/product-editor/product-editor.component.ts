import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import {
  MAT_DIALOG_DATA,
  MatDialogModule,
  MatDialogRef,
} from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { DialogData } from '../../models/dialog-data';
import { Product } from '../../models';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-product-editor',
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
    MatSelectModule,
  ],
  templateUrl: './product-editor.component.html',
  styleUrl: './product-editor.component.scss',
})
export class ProductEditorComponent {
  productFormGroup: FormGroup;
  product: Product;
  title: string;

  constructor(
    public dialogRef: MatDialogRef<ProductEditorComponent>,
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {
    this.product = data.item || new Product();
    this.title = data.title || 'Izmena podataka o proizvodu';
    this.productFormGroup = this.fb.group({
      naziv: [this.product.naziv, [Validators.required]],
      tip: [this.product.tip, [Validators.required]],
      slike: [this.product.slike.join(', '), [Validators.required]],
      kratakOpis: [this.product.kratakOpis, [Validators.required]],
      detaljanOpis: [this.product.detaljanOpis, [Validators.required]],
      cena: [this.product.cena, [Validators.required, Validators.min(0)]],
    });
  }

  getErrorMessage(fieldName: string) {
    let control = this.productFormGroup.get(fieldName);
    if (!control || !control.touched) return '';

    if (control.hasError('required')) {
      return 'Potrebno je uneti vrednost';
    }

    return '';
  }

  isFormValid() {
    return this.productFormGroup.valid;
  }

  isFieldInvalid(fieldName: string): boolean {
    let control = this.productFormGroup.get(fieldName);

    return control ? control.invalid && control.touched : false;
  }

  onSubmit() {
    if (this.productFormGroup.valid) {
      const otherData: Partial<Product> = {
        uKorpi: this.product.uKorpi,
        id: this.product.id,
        prosecnaOcena: this.product.prosecnaOcena,
        ocene: this.product.ocene,
        slike: this.productFormGroup.value.slike
          .split(',')
          .map((img: string) => img.trim()),
      };
      this.dialogRef.close(
        Object.assign({}, this.productFormGroup.value, otherData)
      );
    }
  }
}
