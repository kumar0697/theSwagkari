import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { FormService } from '../form.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {


  constructor(private fservice: FormService, private fb: FormBuilder) { }




  users = [{}];

  user!: FormGroup;

  ngOnInit(): void {

    this.user = this.fservice.myForm;

    this.user = this.fb.group({
      fname: ['', [Validators.maxLength(10), Validators.minLength(2)]],
      lname: ['', [Validators.maxLength(10), Validators.minLength(2)]],
      contact: ['', [Validators.pattern('^[0-9]*$')]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.pattern(''), Validators.minLength(8)]]
    })



  }

  reactiveForm = new FormGroup({
    fname: new FormControl(''),
    name: new FormControl(''),
    contact: new FormControl(''),
    email: new FormControl(''),

  })

   reply = this.reactiveForm.get('fname')?.valueChanges.subscribe(selectedvalue => {console.log(selectedvalue)})



  save() {
    console.log(this.user.value);
    this.users.push(this.user.value);
    this.user.reset();
  }


  get fname() {
    return this.user.get('fname')
  }

  get lname() {
    return this.user.get('lname')
  }

  get contact() {
    return this.user.get('contact')
  }

  get email() {
    return this.user.get('email')
  }

  get password() {
    return this.user.get('password')
  }

}
