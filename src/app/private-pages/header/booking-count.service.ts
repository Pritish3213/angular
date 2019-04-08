import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookingCountService {

  constructor(private http: HttpClient) { }

  getBookCount(){
    return this.http.get('http://localhost:3000/bookings');
  }
}
