import { Pipe, PipeTransform } from '@angular/core';
import { cart } from './modal/user.modal';

@Pipe({
  name: 'filterby'
})
export class FilterbyPipe implements PipeTransform {
  transform(value: any, ...args: any[]) {
    throw new Error('Method not implemented.');
  }

  // transform(product: cart[] , categories: string[]): cart[] {
  //   if(categories.length > 0) {
  //     let sortedProducts:cart[] = [];
  //     for(let i =0; i<categories.length; i++) {
  //         if(product.)
  //     }
  //   }
  //   return null;
  // }

}
