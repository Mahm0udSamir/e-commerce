import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterProduct',
})
export class FilterProductPipe implements PipeTransform {
  transform(products: any[], value: String): any {
    return products.filter((product) =>
      product.title.toLowerCase().includes(value.toLowerCase())
    );
  }
}
