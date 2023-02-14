import { TableProductsComponent } from '../table-products/table-products.component';
import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ProductsService } from '../../services/products.service';
import { Product } from '../../types/product.interface';

@Component({
  selector: 'app-delete-product',
  templateUrl: './delete-product.component.html',
  styleUrls: ['./delete-product.component.scss'],
})
export class DeleteProductComponent {
  product: Product;

  constructor(
    private productsService: ProductsService,
    public dialogRef: MatDialogRef<TableProductsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.product = data;
    console.log('data', data);
  }

  onDelete(): void {
    this.productsService.onDeleteProduct(this.product.id);
  }
}
