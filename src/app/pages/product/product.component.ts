import { Component, OnInit, Output } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { cart } from 'src/app/modal/user,modal';
import { AuthService } from 'src/app/service/auth-service/auth.service';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  catgories: any;
  product: any;
  selectable = true;
  cartModal: cart = new cart();
   count:any= 0;
  @Output() public childevent = new EventEmitter();
  //
  selectedChips: any[] = [];
  constructor(private authService: AuthService,
    private toastr: ToastrService) { }
  ngOnInit(): void {
  this.authService.getAllProduct().subscribe( res => {
    this.product = res;
    console.log(this.product);
  });

  this.authService.getAllCategories().subscribe( res => {
    this.catgories = res;
    console.log(this.catgories);
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
        this.authService.getProductById(id).subscribe( res=> {
          console.log(res);
          this.cartModal = res;
          console.log(this.cartModal);
        })
        if(true) {
        this.authService.addToCart(this.cartModal).subscribe( res => {
          console.log(res);
          this.count++;
          console.log(this.count);
          this.authService.updateCartCount(this.count);
          this.toastr.info("Added to cart");
          // this.childevent.emit(this.count);
        })

      }
      // else {
      //   this.toastr.error("Server Error");
      // }
  }
}
