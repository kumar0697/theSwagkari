import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.scss']
})
export class SettingComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit(): void {
  }
  onClick(){
    this.route.navigate(['login'])
  }

}
