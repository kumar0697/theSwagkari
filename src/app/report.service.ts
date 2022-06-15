import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReportService {

  constructor() { }

  show(view:any){
console.log(view)
  }
  
  edit( diff:any){
console.log(diff);

  }

  delete(remove:any){
  console.log(this.delete)
  }

  download(){
    console.log('Report Downloaded');
  }
}
