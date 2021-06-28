import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchProduct'
})
export class SearchProductPipe implements PipeTransform {

  transform(value: any, searchProduct: string): any {
    // console.log(value);
    if(searchProduct == '') {
      return value;
    }
    let productArray: any[] =[];
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
