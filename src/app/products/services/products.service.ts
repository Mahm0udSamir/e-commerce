import { Product } from './../types/product.interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, take } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  products$ = new BehaviorSubject<Product[]>([]);

  constructor(private http: HttpClient) {}

  getProducts() {
    const url = 'https://fakestoreapi.com/products';
    return this.http.get(url).pipe(
      map((data: any) => {
        this.products$.next(data);
        return data;
      })
    );
  }

  onDeleteProduct(id: number) {
    console.log('onDeleteProduct');
    this.products$.pipe(take(1)).subscribe((products) => {
      this.products$.next(products.filter((product: any) => product.id !== id));
    });
  }

  onUpdateProduct(product: Product) {
    console.log('onDeleteProduct');
    this.products$.pipe(take(1)).subscribe((products) => {
      const updatedProducts = products.map((prod: any) =>
        prod.id === product.id ? product : prod
      );
      this.products$.next(updatedProducts);
    });
  }

  onAddProduct(product: Product) {
    this.products$.pipe(take(1)).subscribe((products) => {
      const newProduct = {
        ...product,
        id: Math.floor(Math.random() * 10000 + 50),
      };
      const updatedProducts = [...products, newProduct];
      this.products$.next(updatedProducts);
    });
  }
}
