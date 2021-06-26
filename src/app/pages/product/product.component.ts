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
  selectable = true;
  cartModal: cart = new cart();
   count:number= 0;
   fliter: any[] = [];
   public color = '';
   data:any [] =[];
   string:string = '';
  @Output() public childevent = new EventEmitter();
  //
  selectedChips: string[] = [];
  constructor(
    private productService: ProductService,
    private toastr: ToastrService) { }


  ngOnInit(): void {
  this.productService.getAllProduct().subscribe( res => {
    this.product = res;
    console.log(this.product);
    this.color = "blue"
  });

    // this.getCategory();
  this.productService.getAllCategories().subscribe( res => {
    this.catgories = res;
    console.log(this.catgories);
  })

  this.productService.searchString.subscribe( res => {
    this.string = res;
    console.log(this.string);
  })

  }

  changeSelected(parameter: string, query: string) {

    const index = this.selectedChips.indexOf(query);
    if (index >= 0) {
      this.selectedChips.splice(index, 0);
    }
    else {
      this.selectedChips.push(query);
    }
    console.log('this.selectedChips: ' + this.selectedChips);
  }
  addToCard(id: any) {
    console.log(id);
    this.productService.getProductById(id).subscribe( res=> {
      console.log(res);
      this.cartModal = res;
      console.log(this.cartModal);
    })
    if(true) {
    this.productService.addToCart(this.cartModal).subscribe( res => {
      console.log(res);
      this.count++;
      console.log(this.count);
      this.productService.updateCartCount(this.count);
      this.toastr.info("Added to cart");
      // this.childevent.emit(this.count);
    })

  }
  // else {
  //   this.toastr.error("Server Error");
  // }
}


lowToHigh() {
   this.product.sort(function (a, b) {
    return  a.price - b.price;
  });
}

highToLow() {
   this.product.sort(function (a, b) {
    return  b.price - a.price;
  });
}

getCategory(selectedChip : string) {
  console.log(selectedChip);
  this.product.forEach(element => {
    if(element.category === selectedChip) {
      this.fliter.push(element);
      console.log(this.fliter);
    }});
}


}

