import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckOutComponent } from './pages/check-out/check-out.component';
import { ProductComponent } from './pages/product/product.component';
import { RegistationFormComponent } from './pages/registation-form/registation-form.component';
import { UserloginFormComponent } from './pages/userlogin-form/userlogin-form.component';
import { AuthGaurdService } from './service/auth-gaurd/auth-gaurd.service';

const routes: Routes = [
  {
    path: ' ',
    redirectTo: '/signup',
    pathMatch: 'full'
  },
  {
    path: 'signup',
    component: RegistationFormComponent
  },
  {
    path: 'signin',
    component: UserloginFormComponent,
    // canActivate: [AuthGaurdService]
  },
  {
    path: 'product',
    component: ProductComponent,
    canActivate: [AuthGaurdService]
  },
  {
    path: 'checkout',
    component: CheckOutComponent,
    canActivate: [AuthGaurdService]
  },
  {
    path: 'logout',
    component: UserloginFormComponent,
  },
  {
    path: '**',
    component: RegistationFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
