import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LeadsService } from '../services/leads.service';

@Component({
  selector: 'app-leads',
  templateUrl: './leads.component.html',
  styleUrls: ['./leads.component.scss']
})
export class LeadsComponent {

  constructor(private route: Router, private services: LeadsService ) { }

  showLeads = [
    { hell : 'hello world'}
  ];


  add() {
   this.showLeads.push(
      {
        hell :  `${ 'hello world ' + 1}`,
      } )

  }

  link() {
    // this.route.navigate(['leads-form'])
  }

}
