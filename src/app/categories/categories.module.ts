import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';

import { CategoriesComponent } from './components/categories/categories.component';
import { CategoriesRoutingModule } from './categories-routing.module';
import { CategoriesService } from './services/categories.service';
import { ProductsModule } from '../products/products.module';
import { ProductsService } from '../products/services/products.service';

@NgModule({
  declarations: [CategoriesComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    CategoriesRoutingModule,
    MatGridListModule,
    MatListModule,
    MatCardModule,
    ProductsModule,
  ],
  providers: [CategoriesService],
})
export class CategoriesModule {}
