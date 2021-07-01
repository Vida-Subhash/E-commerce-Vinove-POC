import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'searchProduct',
  // pure: false
})

export class SearchProductPipe implements PipeTransform  {
transform(items: any[], searchText: string): any[] {
  if(!items && !searchText ) return [];
  return this.searchItems(items, searchText);
 }

 private searchItems(items :any[], searchText: string): any[] {
   let results: any[] = [];
    items.forEach(ele => {
      if (ele.title.toLowerCase().includes(searchText)) {
          results.push(ele);
      }
    });
    return results;
 }
}
