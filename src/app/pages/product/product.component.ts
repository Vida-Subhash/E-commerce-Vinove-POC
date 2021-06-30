import {  Component, OnInit, Output } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { cart } from 'src/app/modal/user.modal';
import { EventEmitter } from '@angular/core';
import { ProductService } from 'src/app/service/product/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit{
  catgories: any;
  product: any[] =[];
  cartModal: cart = new cart();
  count:number= 0;
  fliter: any[] = [];
  string:string = "";
  //
  cartProduct: any[] = [];
  @Output() public childevent = new EventEmitter();
  search:string = '';
  cartProducts!: any[];
  constructor(
    public productService: ProductService,
    private toastr: ToastrService) { }


  ngOnInit(): void {
    this.productService.searchString.subscribe( res => {
      this.search = res;
      console.log("product component",this.search);
    })

    this.getProducts();
    this.productService.getAllCategories().subscribe( res => {
    this.catgories = res;
    console.log(this.catgories);
    });

  }
// Ge all the product form database
  getProducts() {
    this.productService.getAllProduct().subscribe( res => {
      this.product = res;
      console.log(this.product);
    });
  }

// Add selected product to cart
  addToCard(id: any) {
    console.log(id);
    this.productService.getCartProduct().subscribe( res => {
        this.cartProducts = res;
        console.log(this.cartProducts);
    });
    // if(this.cartProducts) {
    //       for(let i=0; i<this.cartProducts.length; i++ ) {
    //         if(this.cartProducts[i].id == id) {
    //           this.productService.updateQuntity(id).subscribe( res => {
    //             console.log(res);
    //             this.cartModal.quntity = res.quntity +1;
    //             console.log(this.cartModal.quntity);
    //           })
    //         }
    //       }
    // }
    this.productService.getProductById(id).subscribe( res=> {
      console.log(res);
      this.cartModal = res;
      console.log(this.cartModal);
      this.productCart()
    })
}

// Send selected product to cart and increment counter.
productCart() {
  this.productService.addToCart(this.cartModal).subscribe( res => {
    console.log(res);
    this.count++;
    this.cartProduct = res;
    console.log(this.count);
    this.productService.updateCartCount(this.count);
    this.toastr.info("Added to cart");
  });
}

// Sort the product by price.
lowToHigh() {
   this.product.sort(function (a, b) {
    return  a.price - b.price;
  });
}

// Sort the product by price.
highToLow() {
   this.product.sort(function (a, b) {
    return  b.price - a.price;
  });
}

// get SelectedChip value and filter accordingly.
getCategory(selectedChip : string) {
  console.log(selectedChip);
  this.productService.getAllProduct().subscribe( res => {
  this.product = res.filter((res:any) => res.category == selectedChip);
  });
}
getChildValue(text:any) {
  this.productService.searchString.subscribe( res => {
    text = res;
  })
}

}

