import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
    public isLoading: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
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
  signInUser(email: string, password: string) {
    return this.http.get<any>("http://localhost:3000/users",)
    .pipe(map((res:any ) => {
      return res;
    }));
  }

  getAllProduct() {
    this.isLoading.next(true);
      return this.http.get<any>('http://localhost:3000/products')
      .pipe(map((res:any ) => {
        // console.log(res);
        return res;
      })
      );

  }
  // Send Verification Email
  sendVerificationEmail( data: any) {
    return this.http.post(this.serverUrl, data);
  }
}
