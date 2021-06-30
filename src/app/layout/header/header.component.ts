import {  Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
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
  @Output()  childevent = new EventEmitter();
  constructor(
    private router: Router,
    private authService: AuthService,
    private prouctService: ProductService
  ) { }


  ngOnInit(): void {
    this.authService.isLoggedIn.subscribe( res => {
      this.isLoggedIn = res;
      // console.log(this.isLoggedIn);
    });

    this.prouctService.cartCount.subscribe( res => {
      this.parentData = res;
    });
  }

  searchBtn() {
    this.prouctService.sendSerachString(this.search);
  }

  emitData(s:any) {
    this.prouctService.searchString.next(this.search);
    this.childevent.emit(this.search);
    console.log("header componet", this.search);
  }

  cart() {
    this.router.navigateByUrl('checkout');
  }

  logOut() {
      this.router.navigateByUrl('signin');
      this.authService.isLoggedIn.next(false);
  }

}
