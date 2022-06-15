import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable()
export class LeadsService {

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
}

export interface IService{
  id: string;
  name: string;
  price: number;
  banner_image: string;
  description? : string;
  documents? : string[];
}
