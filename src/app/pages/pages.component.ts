import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ReportService } from '../report.service';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})
export class PagesComponent implements OnInit {

  form: any;
  constructor() { }

  ngOnInit(): void {
  }

  view(){
    
  }
  
  edit(){
    
  }
  remove(){
    delete this.form.value
  }
  
}
