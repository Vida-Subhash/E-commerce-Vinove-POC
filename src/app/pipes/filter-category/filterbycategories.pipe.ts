import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterbycategories'
})
export class FilterbycategoriesPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
