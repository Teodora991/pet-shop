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
import { ProductService } from '../../services';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { DialogData } from '../../models/dialog-data';
import { Product } from '../../models';

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
    this.title = data.title || 'Измена података о производу';
    this.productFormGroup = this.fb.group({
      name: [this.product.name, [Validators.required]],
      type: [this.product.type, [Validators.required]],
      img: [this.product.images[0], [Validators.required]],
      shortDescription: [this.product.shortDescription, [Validators.required]],
      longDescription: [this.product.longDescription, [Validators.required]],
      price: [this.product.price, [Validators.required, Validators.min(0)]],
    });
  }

  getErrorMessage(fieldName: string) {
    let control = this.productFormGroup.get(fieldName);
    if (!control || !control.touched) return '';

    if (control.hasError('required')) {
      return 'Мораш унети вредност';
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
        addedToCart: this.product.addedToCart,
        id: this.product.id,
        averageRating: this.product.averageRating,
        ratings: this.product.ratings,
      };
      this.dialogRef.close(
        Object.assign({}, this.productFormGroup.value, otherData)
      );
    }
  }
}
