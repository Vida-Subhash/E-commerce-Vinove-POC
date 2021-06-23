import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }
  // User data is submitted
  postUser(data: any) {
    return this.http.post<any>("http://localhost:3000/users", data)
    .pipe(map((res:any ) => {
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
    return this.http.get<any>('http://localhost:3000/products')
    .pipe(map((res:any ) => {
      // console.log(res);
      return res;
    })
    );
  }
}
