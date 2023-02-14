import { Component, Input } from '@angular/core';
import { Subscription } from 'rxjs';
import { Product } from '../../types/product.interface';

@Component({
  selector: 'app-grid-products',
  templateUrl: './grid-products.component.html',
  styleUrls: ['./grid-products.component.scss'],
})
export class GridProductsComponent {
  @Input('productsFilters') productsFilters: Product[] = [];

  value = '';

  constructor() {}

  ngOnInit() {}
}
