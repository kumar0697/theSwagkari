import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  save(form: NgForm) {


    let user = form.value;

    let usersJ: any = localStorage.getItem('signUp');

    let users = JSON.parse(usersJ);

    if (!users) {

      users = [];
      users.push(user);
      localStorage.setItem('signUp', JSON.stringify(users));

    }
    else {
      users.push(user);
      localStorage.setItem('signUp', JSON.stringify(users));

    }
    
    this.route.navigate(['/login'])
  }


}
