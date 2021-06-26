import { Component, OnInit } from '@angular/core';
import { cart } from '../../modal/user.modal';
import { ProductService } from 'src/app/service/product/product.service';

@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.scss']
})

export class CheckOutComponent implements OnInit {
  cartModal: cart = new cart();
  productData: any[] = [];
  count: number= 1;
  total!: number ;
  constructor(private productService: ProductService) {}
  ngOnInit() {
    this.getData();
    // this.calTotal();
  }
getData() {
  this.productService.getCartProduct().subscribe( res => {
    this.cartModal = res;
    console.log(res);
    this.productData = res;
  })
}
calTotal() {
  this.productData.forEach(ele => {
     this.total = ele.price * ele.quntity;
     console.log(this.total);
    });
    this.total += this.total;
  // console.log(this.total);
  // var d = data.forEach(ele => {
  //   console.log(ele.title);
  // })
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
      })
    }

    senCartData() {
      console.log(this.cartModal);
          this.productService.sendCartToEmail(this.cartModal).subscribe( res => {
            console.log(res);
          });
    }

}






