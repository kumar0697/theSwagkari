import { Component } from '@angular/core';
import { Form, NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  loginForm!: NgForm;

  constructor(private route: Router) { }

  save(form: NgForm) {

    // this.loginService.getToken(form.value).subscribe((resp: any) => {
    //   if (resp.token) {
    //     this.route.navigate(['dashboard'])
    //     localStorage.setItem('token', resp.token)
    //   } else {
    //     alert('Invalid User')
    //   }
    // })

    let users : any= localStorage.getItem('signUp');

    let userData = JSON.parse(users);


    console.log(userData.password);


    if(userData.email === form.value.email.value) {
      console.log ('Username is Proper');
    }else{
      alert('Username is Invalid!');
    }
    if(userData.password === form.value.password.value) {
      alert ('Logged In!')
      this.route.navigate(['/dashboard'])
    }else{
      alert('Password is Invalid!')
    }
    
  }

  onClick() {
    this.route.navigate(['/signup'])
  }


}
