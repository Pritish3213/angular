import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FetchFAQService {

  constructor(private http:HttpClient) { }
  fetchFAQ(){
    return this.http.get('http://localhost:3000/FAQ') //Get method to fetch FAQ data from db.json
}
}
