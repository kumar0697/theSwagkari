import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {



  constructor() { }

  ngOnInit(): void {
  }


  cLead = [{}];


  discount = [{
    Name: '',
    LastName: '',
    Email: ''
  }];
hide: boolean = true;

  add() {
    // this.lead.leads(1,'GST filling',1500);

    this.cLead.push(
      {
        Id: `${this.cLead.length + 564}`,
        // Service: Symbol(),
        Price: ` ${this.cLead.length + 1541}`,
      },
    )

  }

  onClick(){
    
  }



}