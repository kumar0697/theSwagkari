import { Injectable } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Injectable()
export class FormService {

    myForm: FormGroup = this.fb.group({
        name: ['', [Validators.required, Validators.minLength(2)]],
        contact: ['', [Validators.required, Validators.pattern('^[0-9]*$'),]],
        email: ['', [Validators.required, Validators.email,]],
        password: ['', [Validators.required, Validators.pattern(''),]],


    })

    constructor(private fb: FormBuilder) { }

     name() {
      return this.myForm.get('name');
    }

     contact() {
      return this.myForm.get('contact');
    }

     email() {
      return this.myForm.get('email');
    }

     password() {
      return this.myForm.get('password');
    }



}