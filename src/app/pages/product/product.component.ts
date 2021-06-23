import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth-service/auth.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  constructor(private authService: AuthService) { }
  product= [];
  ngOnInit(): void {
  this.authService.getAllProduct().subscribe( res => {
    res = this.product;
    console.log(this.product);
  })
  }

}
