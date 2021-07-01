import { Pipe, PipeTransform } from "@angular/core";


@Pipe ({
  name: 'FilterByPrice',
})



export class FilterByPrice  implements PipeTransform {
  transform(value: any[], sortbyprice: string) :any {
      if(!sortbyprice && sortbyprice == '') return value;

    return this.sortItem(value, sortbyprice);
  }

  private sortItem(value:any[], sortbyprice:string) {
    let result:any [] =[];
    if(sortbyprice == "low") {
  return  result =  value.sort((a,b) => a.price - b.price)
  }
  if(sortbyprice == "high") {
  return  result =  value.sort((a,b) => b.price - a.price)
  }
  return value;
}

}
