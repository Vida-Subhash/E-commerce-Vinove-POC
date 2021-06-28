import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from './service/auth-service/auth.service';
import { ProductService } from './service/product/product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public values: number | undefined;
  constructor( private productService: ProductService) {
    this.productService.cartCount.subscribe( res => {
      this.values =res;
      console.log(res);
    })
  }
  title = 'e-commerce-app';

}
