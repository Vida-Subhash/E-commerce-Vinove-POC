import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { AuthService } from '../auth-service/auth.service';
import { ProductService } from '../product/product.service';

@Injectable({
  providedIn: 'root'
})
export class IntercepterService implements HttpInterceptor {

  constructor(
     private authService: AuthService,
     private productService: ProductService,
    ) { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.authService.isLoading.next(true);
    this.productService.isLoading.next(true);
    return next.handle(req).pipe(
      finalize(
        () => {
          this.authService.isLoading.next(false);
          this.productService.isLoading.next(false);
        }
      )
    )
  }
}
