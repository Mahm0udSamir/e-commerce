import { AuthService } from './../../../auth/services/auth.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { combineLatest, Observable, Subscription } from 'rxjs';
import { CategoriesService } from '../../services/categories.service';
import { ProductsService } from '../../../products/services/products.service';
import { Product } from 'src/app/products/types/product.interface';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
})
export class CategoriesComponent implements OnInit, OnDestroy {
  categories!: String[];
  products!: Product[];
  subscription?: Subscription;
  productsFilters?: Product[];
  currentCategory?: String;
  isAdmin$: Observable<Boolean>;

  constructor(
    public categoriesService: CategoriesService,
    private productsService: ProductsService,
    public authService: AuthService
  ) {
    this.isAdmin$ = this.authService.isLAdmin;
  }

  ngOnInit() {
    this.subscription = combineLatest([
      this.categoriesService.getCategories(),
      this.productsService.getProducts(),
      this.productsService.products$,
    ]).subscribe(([categoriesData, _, productsData]) => {
      this.categories = categoriesData;
      this.products = productsData;

      this.onChangeCategory(
        this.currentCategory ? this.currentCategory : categoriesData[0]
      );
    });
  }

  onChangeCategory(categoryName: String) {
    this.productsFilters = this.products.filter(
      (product: any) => product.category === categoryName
    );
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }
}
