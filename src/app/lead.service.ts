import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LeadService {

letructor() { }


  leads( id: number,service: string,price: number ){

  }

  services: IService[] = [
    {id: 'first-id',
     name: 'Gumasta',
     price: 3000,
     description: 'You can get done the Gumasta',
    banner_image: ''},
    {
      id: 'second-id',
      name: 'ITR-Filling',
      price: 2500,
      description: 'Get Your ITR-Filling with surely from us.',
      banner_image: '',
    }
  ]

  get(): Observable<IService[]> {
    return of(this.services)
  }

  find(service : IService){

  }

  findById (id : IService) {

  }

  validateForm() {

let name = '';
let username = '';
let contact = '';
let email = '';
let password = '';
  



    if(name === ''  ){
      alert('Please fill Name input field.');
      return false;
    }

    if(username === '' ){
      alert('Please enter valid Username.');
      return false;
    }

    if(contact === '' ){
      alert('Please fill Contact No. input field.');
      return false;
    }

    if(email === '' ){
      alert('Please enter valid Email.');
      return false;
    }

    if(password === '' ){
      alert('Please enter valid Password.');
      return false;
    }

    if(password.length < 8) {
      alert('Password should have at least 8 character.')
      return false;
    }
    return true;
    
  }

  
}



export interface IService{
  id: string;
  name: string;
  price: number;
  banner_image: string;
  description? : string;
  documents? : string[];
}
