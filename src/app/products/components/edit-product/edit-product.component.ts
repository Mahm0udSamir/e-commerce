import { TableProductsComponent } from '../table-products/table-products.component';
import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductsService } from '../../services/products.service';
import { Product } from '../../types/product.interface';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss'],
})
export class EditProductComponent implements OnInit {
  form!: FormGroup;
  product!: Product;
  categories: String[];

  constructor(
    private fb: FormBuilder,
    private productsService: ProductsService,
    public dialogRef: MatDialogRef<TableProductsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.product = data.product;
    this.categories = data.categories;
  }

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm(): void {
    this.form = this.fb.group({
      category: [this.product.category, Validators.required],
      description: [this.product.description, Validators.required],
      image: [this.product.image, Validators.required],
      price: [this.product.price, Validators.required],
      title: [this.product.title, Validators.required],
    });
  }

  changeCategory(e: any) {
    this.form.get('category')?.setValue(e.target.value, {
      onlySelf: true,
    });
  }

  onSubmit(): void {
    console.log(this.form);

    if (!this.form.valid) {
      false;
    } else {
      console.log(this.form.value);
      const updatedProduct = { ...this.product, ...this.form.value };
      this.productsService.onUpdateProduct(updatedProduct);
    }
  }
}
