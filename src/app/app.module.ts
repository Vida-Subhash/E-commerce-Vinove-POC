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
import { ReactiveFormsModule } from '@angular/forms';
import { AuthService } from './service/auth-service/auth.service';
import { UserloginFormComponent } from './pages/userlogin-form/userlogin-form.component';
import { ProductComponent } from './pages/product/product.component';
import { CheckOutComponent } from './pages/check-out/check-out.component';
import { AuthGaurdService } from './service/auth-gaurd/auth-gaurd.service';
import { IntercepterService } from './service/intercepter/intercepter.service';
import { TruncatePipe } from './pipes/truncate.pipe';
import { FilterbyPipe } from './filterby.pipe';

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
    FilterbyPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    ReactiveFormsModule,
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
    {
       provide: HTTP_INTERCEPTORS,
       useClass: IntercepterService,
        multi: true
    }
      ],
  bootstrap: [AppComponent]
})
export class AppModule { }
