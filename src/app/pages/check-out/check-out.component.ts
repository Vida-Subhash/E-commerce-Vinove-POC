import { Component, OnInit } from '@angular/core';
import { cart } from '../../modal/user.modal';
import { ProductService } from 'src/app/service/product/product.service';
import { Router } from '@angular/router';
import { retry } from 'rxjs/operators';

@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.scss']
})

export class CheckOutComponent implements OnInit {
  cartModal: cart = new cart();
  productData: any[] = [];
  count!: number;
  total: number = 0;
  cartTotal: any[] =[] ;
  cartCound!: number;
  constructor(
    public productService: ProductService,
    private router: Router) { }
  ngOnInit() {
    // this.calTotal();
    this.getData();
    // this.calTotal();
    this.productService.cartCount.subscribe( res => {
        this.cartCound = res;
    })
  }
getData() {
  this.productService.getCartProduct().subscribe( res => {
    // console.log(res);
    this.productData = res;
    this.cartCound = res.length;
    this.productData = this.productData.map( ele => {
      let obj = {
        ...ele,
        total: ele.price * ele.quntity
      }
      console.log("OBJ printed",obj);
      return obj;
    })
    this.calTotal();
    // console.log(this.productData);
  })
}
calTotal() {
      console.log("checkout console", this.productData);
      this.productData.forEach(ele => {
      this.total = ele.total + this.total;
  });
  // console.log(this.total);
}
  onIncrement(id:any): void {
   let product = this.productData.find(ele => ele.id == id);
   product.quntity += 1;
   product.total = product.quntity * product.price;
   this.calTotal();
  //  console.log(product);
    }

  onDecrement(id:any): void {
      let product = this.productData.find(ele => ele.id == id);
      if(product.quntity > 1 ) {
        product.quntity -= 1;
        product.total = product.quntity * product.price;
        this.calTotal();
      }
    }

    deleteItem(id: any) {
      // console.log(id);
      this.productService.deleteProduct(id).subscribe( res => {
        // console.log(res);
        this.productService.cartCount.next(this.cartCound -= 1);
        // console.log("Cart Count",this.cartCound);
        this.getData();
      });
    }

    senCartData() {
      this.calTotal();
      console.log(this.productData);
      setTimeout(() => {
        this.productService.sendCartToEmail(this.productData).subscribe( res => {
          console.log(res);
        });
        this.emptyCartData();
      },5000)
          // this.productService.sendCartToEmail(this.productData).subscribe( res => {
          //   console.log(res);
          // });
          // this.emptyCartData();
   }

 emptyCartData() {
  this.productData.forEach( ele => {
    this.productService.deleteProduct(ele.id).subscribe( res => {
        this.getData();
        this.productService.cartCount.next(0);
      });
  });
}

  backToProductPage() {
        this.router.navigateByUrl('product');
    }

}






