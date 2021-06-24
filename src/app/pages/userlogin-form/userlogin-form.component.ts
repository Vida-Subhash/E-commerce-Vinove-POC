import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/service/auth-service/auth.service';

@Component({
  selector: 'app-userlogin-form',
  templateUrl: './userlogin-form.component.html',
  styleUrls: ['./userlogin-form.component.scss']
})
export class UserloginFormComponent implements OnInit {
  myForm!: FormGroup;
  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private toastr: ToastrService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.reactiveForm();
  }

  reactiveForm() {
    this.myForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(5)]]
    })
  }

  public errorHandling = (control: string, error: string) => {
    return this.myForm.controls[control].hasError(error);
  }
  submitForm() {
      console.log(this.myForm.value);

        this.authService.authLogin(this.myForm.value.email, this.myForm.value.password).subscribe(
          res => {
            this.toastr.success("Login Success.");
            console.log("user found", res);
            this.router.navigateByUrl('product');
          }
        )
        localStorage.setItem('tocken', 'loggedIn');


  }
}
