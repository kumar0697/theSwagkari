import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { IService, LeadsService } from '../services/leads.service';

@Component({
  selector: 'app-leads-form',
  templateUrl: './leads-form.component.html',
  styleUrls: ['./leads-form.component.scss']
})
export class LeadsFormComponent implements OnInit {

  constructor( private route: Router) { }

  ngOnInit(): void {
  }



save(form : NgForm, ) {

  console.log(form.value);
  this.route.navigate(['./signup']);
}


}
