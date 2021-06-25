import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
    public isLoading: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
    public cartCount: BehaviorSubject<number> =  new BehaviorSubject<number>(0);
    public isLoggedIn: BehaviorSubject<boolean> =  new BehaviorSubject<boolean>(false);
    serverUrl:string = "http://localhost:8000/sendmail";
  constructor(private http: HttpClient) { }
  // User data is submitted
  postUser(data: any) {
    return this.http.post<any>("http://localhost:3000/users", data)
    .pipe(map((res:any ) => {
      return res;
    }));
  }
getUser() {
  return this.http.get<any>("http://localhost:3000/users")
  .pipe(map((res: any ) => {
    return res;
  }));
}
  // User Auth
  authLogin(email: string, password: string): Observable<any> {

    this.isLoggedIn.next(true);
    return this.http.get("http://localhost:3000" + '/users?email=' + email + '&password=' + password)
    .pipe(map((res:any ) => {
      return res;
    }
    ));
  }
    // Send Verification Email
  sendVerificationEmail( data: any) {
    return this.http.post(this.serverUrl, data);
  }

// Product API
  getAllProduct() {
      return this.http.get<any>('http://localhost:3000/products')
      .pipe(map((res:any ) => {
        // console.log(res);
        return res;
      }));
    }
  getAllCategories() {
    return  this.http.get<any>('http://localhost:3000/categories')
    .pipe(map( (res:any) => {
      return res;
    }));
 }
  addToCart(data: any) {
    // let cartData:any;
    // let Data = this.getProductById(data).subscribe( res => {
    //   console.log(res)
    //   cartData = res;

    // });
    // Data.unsubscribe();
    return  this.http.post<any>('http://localhost:3000/cart', data)
    .pipe(map( (res:any) => {
      return res;
    }));
 }
  getProductById(data: any) {
    return  this.http.get<any>('http://localhost:3000/products/'+data)
    .pipe(map( (res:any) => {
      return res;
    }));
 }
getCartProduct() {
  return this.http.get<any>('http://localhost:3000/cart')
  .pipe(map( (res:any) => {
    return res;
  }));
}
 updateCartCount(count: number) {
   this.cartCount.next(count);
 }

 deleteProduct(id: number) {
  return this.http.delete<any>("http://localhost:3000/cart/"+id)
  .pipe(map((res:any ) => {
    return res;
  }));
}
}
