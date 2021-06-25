import { Component, OnInit } from '@angular/core';
import { cart } from '../../modal/user.modal';

import { AuthService } from 'src/app/service/auth-service/auth.service';

@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.scss']
})
// export class TableStickyHeaderExample {
//   displayedColumns = ['position', 'name', 'weight', 'symbol'];
//   dataSource = ELEMENT_DATA;
// export interface PeriodicElement {
//   name: string;
//   position: number;
//   weight: number;
//   symbol: string;
// }
// }
export class CheckOutComponent implements OnInit {
  cartModal: cart = new cart();
  productData!: any;
  count: number= 1;
  constructor(private productService: AuthService) {

  }
  // displayedColumns = ['position', 'name', 'weight', 'symbol'];
  displayedColumns = ['Product Image','Product Name', 'Description', 'Price' ];
  dataSource = ELEMENT_DATA;
  ngOnInit() {
    this.getData();
  }
getData() {
  this.productService.getCartProduct().subscribe( res => {
    this.cartModal = res;
    console.log(res);
    this.productData = res;
  })
}
  onIncrement(): void {
    this.count += 1;
    }

    onDecrement(): void {
      if(this.count > 1 ) {
          this.count -= 1;
      }
    }

    deleteItem(id: any) {
      console.log(id);
      this.productService.deleteProduct(id).subscribe( res => {
        console.log(res);
        this.getData();
        // this.productData = res;
        // this.productService.getCartProduct();
      })
    }
}

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: cart[]  = [];
// = [
//   {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
//   {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
//   {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
//   {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
//   {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
//   {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
//   {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
//   {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
//   {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
//   {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
// ];

