import { AfterContentInit, Component, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth-service/auth.service';
import { ProductService } from 'src/app/service/product/product.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnChanges, AfterContentInit {
  isLoggedIn!: boolean;
  search: string = '';
  @Input() public parentData: number | undefined;
  constructor(
    private router: Router,
    private authService: AuthService,
    private productService: ProductService,
  ) { }
  ngOnChanges(): void {

  }
  ngAfterContentInit() {
    this.productService.searchString.next(this.search);
  }
  ngOnInit(): void {
    // this.isLoggedIn = !!localStorage.getItem('tocken');
    this.authService.isLoggedIn.subscribe( res => {
      this.isLoggedIn = res;
      console.log(this.isLoggedIn);
    });

    console.log(this.search);
  }
  cart() {
    this.router.navigateByUrl('checkout');
  }
  logOut() {
      this.router.navigateByUrl('signin');
      this.authService.isLoggedIn.next(false);
  }

}
