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
  authLogin(user: any): Observable<any> {

    return this.http.get("http://localhost:3000/users", user)
    .pipe(map((res:any ) => {
      this.isLoggedIn.next(true);
      return res;
    }
    ));
  }
    // Send Verification Email
  sendVerificationEmail( data: any) {
    return this.http.post(this.serverUrl, data);
  }

}
