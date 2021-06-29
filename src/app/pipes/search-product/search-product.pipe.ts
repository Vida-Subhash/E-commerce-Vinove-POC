import { Pipe, PipeTransform } from '@angular/core';
import { cart } from 'src/app/modal/user.modal';

@Pipe({
  name: 'searchProduct',
  // pure: false
})
export class SearchProductPipe implements PipeTransform {

  transform(value: any, search:string): any {
    // console.log("Search string", search);
    // console.log(value);
    // if(search == '') {
    //   return value;
    // }
    // var productArray: any[] =[];
    //   value.forEach( ele => {
    //     let product:string = ele.title;
    //     console.log(product);
    //     if(product.includes(search)){
    //       productArray.push(ele);
    //       console.log(productArray);
    //     }
    //   })

    // }
    // return productArray;
  }

}
