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
  count!: number;
  total!: any ;
  cartTotal: any[] =[] ;
  cartCound!: number;
  constructor(
    private productService: ProductService,
    private router: Router) {
      this.calTotal();
    }
  ngOnInit() {
    // this.calTotal();
    this.getData();
    // this.calTotal();
    this.productService.cartCount.subscribe( res => {
        this.cartCound = res;
    })
  }
getData() {
  this.calTotal();
  this.productService.getCartProduct().subscribe( res => {
    // this.cartModal = res;
    console.log(res);
    this.productData = res;
    this.cartCound = res.length;
  })
}
calTotal() {
  for (let i=0; i<this.productData.length; i++) {
        this.total = this.productData[i].price * this.productData[i].quntity;
       this.cartTotal.push(this.total);
       console.log(this.cartTotal);
}
   this.count =   this.cartTotal.reduce((a,b) => a +b, 0 );
  // this.productData.forEach(ele => {
  //    this.total = ele.price * ele.quntity;

  //    return this.total
  // });
  // console.log(this.total);
  // var d = data.forEach(ele => {
  //   console.log(ele.title);
  // })
}
  onIncrement(id:any): void {
   let product = this.productData.find(ele => ele.id == id);
   product.quntity += 1;
   console.log(product);
    }

    onDecrement(id:any): void {
      let product = this.productData.find(ele => ele.id == id);
      if(product.quntity > 1 ) {
        product.quntity -= 1;
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
          });
          this.emptyCartData();
   }

emptyCartData() {
  this.productData.forEach( ele => {
    this.productService.removeCartData(ele.id).subscribe( res => {
        this.getData();
        this.productService.cartCount.next(0);
      });
  })
}
    backToProductPage() {
        this.router.navigateByUrl('product');
    }

}






