import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-jwt',
  templateUrl: './jwt.component.html',
  styleUrls: ['./jwt.component.scss']
})
export class JwtComponent implements OnInit {

form: FormGroup;

  constructor(private fb:FormBuilder,
                 private authService:AuthService,
                 private route:Router) { 

                  this.form = this.fb.group({
                    username: ['',Validators.required],
                    password: ['',Validators.required]
                  })
                  }

  ngOnInit(): void {
  }

  login(){
    const val = this.form.value;

    if(val.email&& val.password){
      this.authService.login(val.email,val.password)
      .subscribe(
        ()=> {
          console.log('User Logged In');
          this.route.navigate(['/reset-password'])
        }
      );
    }
  }
}
