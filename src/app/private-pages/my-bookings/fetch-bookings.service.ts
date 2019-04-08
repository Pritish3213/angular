import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FetchBookingsService {

  constructor(private http: HttpClient) { }

  fetchBook(upcomingOrPast){
    return this.http.get('http://localhost:3000/bookings', {
      params: upcomingOrPast
    });   //fetchBook() to GET data of bookings
  }
}
