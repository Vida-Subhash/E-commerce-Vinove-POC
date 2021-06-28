import { Pipe, PipeTransform } from '@angular/core';
import { cart } from 'src/app/modal/user.modal';

@Pipe({
  name: 'searchProduct',
  // pure: false
})
export class SearchProductPipe implements PipeTransform {

  transform(value: cart[], searchProduct: string): any {
    console.log(value);
    if(!value) {
      return value;
    }
    if(searchProduct == '') {
      return value;
    }
    let productArray: cart[] =[];
    for(let i=0; i<=value.length; i++) {
      let product:string = value[i].title;
      console.log(product);
      if(product.includes(searchProduct)){
        productArray.push(value[i]);
        console.log(productArray);
      }
    }

    return productArray;
  }

}
