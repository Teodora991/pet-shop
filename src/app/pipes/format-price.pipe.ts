import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatPrice',
  standalone: true,
})
export class FormatPricePipe implements PipeTransform {
  transform(value: number): string {
    const formattedPrice = new Intl.NumberFormat('sr-RS', {
      style: 'currency',
      currency: 'RSD',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(value);

    return formattedPrice;
  }
}
