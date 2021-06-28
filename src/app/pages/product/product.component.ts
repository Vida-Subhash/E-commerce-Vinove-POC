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
  string:string = '';
  @Output() public childevent = new EventEmitter();
  search:any = '';
  constructor(
    private productService: ProductService,
    private toastr: ToastrService) { }


  ngOnInit(): void {

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


}

