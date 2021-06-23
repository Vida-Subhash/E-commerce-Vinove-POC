import { Component, OnInit} from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";


@Component({
  selector: 'app-registation-form',
  templateUrl: './registation-form.component.html',
  styleUrls: ['./registation-form.component.scss']
})
export class RegistationFormComponent implements OnInit {
  myForm!: FormGroup;
  constructor(public fb: FormBuilder) {}

  ngOnInit(): void {
    this.reactiveForm()
  }

  /* Reactive form */
  reactiveForm() {
    this.myForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required]],
      gender: ['Male'],
      dob: ['', [Validators.required]],
      grade: [''],
    })
  }

  /* Handle form errors in Angular 8 */
  public errorHandling = (control: string, error: string) => {
    return this.myForm.controls[control].hasError(error);
  }

  submitForm() {
    console.log(this.myForm.value)
  }


}
