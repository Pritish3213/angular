import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ParChildCommunicationService {

  name:string;

  constructor() { }

  setName(name){
    this.name=name;
  }
  getName(): string{
    return this.name;
  }
}
