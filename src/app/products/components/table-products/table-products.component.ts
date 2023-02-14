import { DeleteProductComponent } from './../delete-product/delete-product.component';
import { Component, Input, OnChanges } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { EditProductComponent } from '../edit-product/edit-product.component';
import { AddProductComponent } from '../add-product/add-product.component';
import { Product } from '../../types/product.interface';

@Component({
  selector: 'app-table-products',
  templateUrl: './table-products.component.html',
  styleUrls: ['./table-products.component.scss'],
})
export class TableProductsComponent implements OnChanges {
  @Input('productsFilters') productsFilters: Product[] = [];
  @Input('categories') categories!: String[];

  displayedColumns: string[] = [
    'index',
    'price',
    'title',
    'description',
    'image',
    'id',
  ];
  pageSize = [];
  dataSource: any;

  constructor(public dialog: MatDialog) {}

  ngOnChanges() {
    this.dataSource = new MatTableDataSource<any[]>(
      this.productsFilters.map((product: any, i) => ({
        ...product,
        index: i + 1,
      }))
    );
  }

  onAdd() {
    this.dialog.open(AddProductComponent, {
      data: { categories: this.categories },
    });
  }

  onDelete(id: any) {
    console.log(id);

    this.dialog.open(DeleteProductComponent, {
      data: this.productsFilters.find((p: any) => p.id === id),
    });
  }

  onEdit(id: any) {
    const product = this.productsFilters.find((p: any) => p.id === id);
    this.dialog.open(EditProductComponent, {
      data: { product, categories: this.categories },
    });
  }
}
