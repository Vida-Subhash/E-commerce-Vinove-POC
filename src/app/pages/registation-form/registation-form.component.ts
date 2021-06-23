import { Component, OnInit} from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { ToastrService } from 'ngx-toastr';
import { user } from 'src/app/modal/user,modal';
import { AuthService } from 'src/app/service/auth-service/auth.service';


@Component({
  selector: 'app-registation-form',
  templateUrl: './registation-form.component.html',
  styleUrls: ['./registation-form.component.scss']
})
export class RegistationFormComponent implements OnInit {
  myForm!: FormGroup;
  userModal: user = new user();
  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private toastr: ToastrService) {}

  ngOnInit(): void {
    this.reactiveForm();
    this.authService.getUser().subscribe( res=> {
      console.log(res);
    })
  }

  /* Reactive form */
  reactiveForm() {
    this.myForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      gender: ['Male', [Validators.required]],
     password: ['', [Validators.required, Validators.minLength(5)]]
    })
  }

  /* Handle form errors in Angular 8 */
  public errorHandling = (control: string, error: string) => {
    return this.myForm.controls[control].hasError(error);
  }

  submitForm() {
    this.userModal.name = this.myForm.value.name;
    this.userModal.email = this.myForm.value.email;
    this.userModal.password = this.myForm.value.password;
    this.userModal.gender = this.myForm.value.gender;
    this.authService.postUser(this.userModal).subscribe( res => {
      console.log(res);
      this.toastr.success("User registered Sucessfully.")
      this.myForm.reset();
    });
}


}
