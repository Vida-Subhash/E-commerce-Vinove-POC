import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from './service/auth-service/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(  private toastr: ToastrService, private productService: AuthService) {}
  title = 'e-commerce-app';
  click() {
      // this.LoggedIn = true;
      this.toastr.success('Success');
      this.productService.getAllProduct().subscribe( res => {
        console.log(res);
      })
    //   this.http.get<any>("http://localhost:3000/products")
    //   .pipe(map((res:any ) => {
    //     console.log(res);
    //     return res;
    //   }));
    }
}
