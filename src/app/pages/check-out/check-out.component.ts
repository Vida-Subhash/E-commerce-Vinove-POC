import { Component, OnInit } from '@angular/core';
import { cart } from '../../modal/user.modal';
import { ProductService } from 'src/app/service/product/product.service';
import { Router } from '@angular/router';

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
  cartCound!: number;
  constructor(
    private productService: ProductService,
    private router: Router) {}
  ngOnInit() {
    this.getData();
    // this.calTotal();
    this.productService.cartCount.subscribe( res => {
        this.cartCound = res;
    })
  }
getData() {
  this.productService.getCartProduct().subscribe( res => {
    // this.cartModal = res;
    console.log(res);
    this.productData = res;
    this.cartCound = res.length;
  })
}
calTotal() {
  this.productData.forEach(ele => {
     this.total = ele.price * ele.quntity;
     this.total
     console.log(this.total);
  });
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
        this.productService.cartCount.next(this.cartCound -= 1);
        // this.cartCound -= 1;
        console.log("Cart Count",this.cartCound);
        this.getData();
      })
    }

    senCartData() {
      this.calTotal();
      console.log(this.productData);
          this.productService.sendCartToEmail(this.productData).subscribe( res => {
            console.log(res);

            // this.productService.removeCartData(this.productData).subscribe( res => {
            //   console.log(res);
            //   this.productData = res;
            //   this.getData();
            // });
        });

    }

    backToProductPage() {
        this.router.navigateByUrl('product');
    }

}






