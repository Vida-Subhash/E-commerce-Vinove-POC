import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../auth-service/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGaurdService implements CanActivate {
logged: boolean = false;
  constructor(
    private authService: AuthService,
    private router: Router
  ) {
    this.authService.isLoggedIn.subscribe(res => {
    this.logged = res;
    console.log(this.logged);
    })
  }
  canActivate(): boolean {
    if(this.logged) {
      return true
    } else {
      this.router.navigateByUrl('signing');
      return false
    }
  }
}
