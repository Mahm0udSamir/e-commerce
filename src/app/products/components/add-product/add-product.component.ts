import { TableProductsComponent } from '../table-products/table-products.component';
import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductsService } from '../../services/products.service';
import { Product } from '../../types/product.interface';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss'],
})
export class AddProductComponent implements OnInit {
  form!: FormGroup;
  product!: Product;
  categories: any[];

  constructor(
    private fb: FormBuilder,
    private productsService: ProductsService,
    public dialogRef: MatDialogRef<TableProductsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    console.log('data', data);
    this.categories = data.categories;
    console.log(this.categories);
  }

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm(): void {
    this.form = this.fb.group({
      category: [this.categories[0], Validators.required],
      description: ['', Validators.required],
      image: ['', Validators.required],
      price: [1, Validators.required],
      title: ['', Validators.required],
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
      const updatedProduct: Product = { ...this.product, ...this.form.value };
      this.productsService.onAddProduct(updatedProduct);
    }
  }
}
