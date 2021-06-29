import { Pipe, PipeTransform } from '@angular/core';
import { cart } from 'src/app/modal/user.modal';

@Pipe({
  name: 'searchProduct',
  // pure: false
})

export class SearchProductPipe implements PipeTransform  {
transform(items: any[], searchText: string): any[] {
  if(!items) return [];
  if(!searchText) return items;

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
