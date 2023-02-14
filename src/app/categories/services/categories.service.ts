import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

@Injectable()
export class CategoriesService {
  constructor(private http: HttpClient) {}

  getCategories() {
    const url = 'https://fakestoreapi.com/products/categories';
    return this.http.get(url).pipe(map((data: any) => data));
  }
}
