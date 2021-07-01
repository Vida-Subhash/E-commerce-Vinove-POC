import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { MaterialModule } from './material/material.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { RegistationFormComponent } from './pages/registation-form/registation-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from './service/auth-service/auth.service';
import { UserloginFormComponent } from './pages/userlogin-form/userlogin-form.component';
import { ProductComponent } from './pages/product/product.component';
import { CheckOutComponent } from './pages/check-out/check-out.component';
import { AuthGaurdService } from './service/auth-gaurd/auth-gaurd.service';
import { IntercepterService } from './service/intercepter/intercepter.service';
import { TruncatePipe } from './pipes/char-limit/truncate.pipe';
import { SearchProductPipe } from './pipes/search-product/search-product.pipe';
import { ProductService } from './service/product/product.service';
import { FilterByPrice } from './pipes/filter-by-price/filterbyprice.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    RegistationFormComponent,
    UserloginFormComponent,
    ProductComponent,
    CheckOutComponent,
    TruncatePipe,
    SearchProductPipe,
    FilterByPrice,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    ToastrModule.forRoot(
      {
       timeOut: 3000,
       preventDuplicates: true,
      }),
  ],
  providers: [
    HttpClientModule,
     AuthService,
     AuthGaurdService,
     ProductService,
    {
       provide: HTTP_INTERCEPTORS,
       useClass: IntercepterService,
        multi: true
    },
      ],
  bootstrap: [AppComponent]
})
export class AppModule { }
