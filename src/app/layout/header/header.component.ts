import {  Component, Input, OnInit } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth-service/auth.service';
import { ProductService } from 'src/app/service/product/product.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isLoggedIn!: boolean;
  search: string = '';
  @Input() public parentData: number | undefined;
  constructor(
    private router: Router,
    private authService: AuthService,
    private productService: ProductService,
  ) { }


  ngOnInit(): void {
    // this.isLoggedIn = !!localStorage.getItem('tocken');
    this.authService.isLoggedIn.subscribe( res => {
      this.isLoggedIn = res;
      console.log(this.isLoggedIn);
    });

    // console.log(this.search);
  }
  cart() {
    this.router.navigateByUrl('checkout');
  }
  logOut() {
      this.router.navigateByUrl('signin');
      this.authService.isLoggedIn.next(false);
  }

}
