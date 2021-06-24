import { Component, OnInit } from '@angular/core';
import { cart } from 'src/app/modal/user,modal';
import { AuthService } from 'src/app/service/auth-service/auth.service';

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
  //
  selectedChips: any[] = [];
  constructor(private authService: AuthService) { }
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
        this.authService.addToCart(this.cartModal).subscribe( res => {
          console.log(res);
        })
  }
}
