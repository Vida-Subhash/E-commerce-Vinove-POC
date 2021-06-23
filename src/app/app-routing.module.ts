import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistationFormComponent } from './pages/registation-form/registation-form.component';

const routes: Routes = [
  // {
  //   path: '',
  //   redirectTo: '/login',
  //   pathMatch: 'full'
  // },
  {
    path: 'signup',
    component: RegistationFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
