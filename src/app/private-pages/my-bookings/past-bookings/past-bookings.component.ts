import { Component, OnInit } from '@angular/core';
import { FetchBookingsService } from '../fetch-bookings.service';

@Component({
  selector: 'app-past-bookings',
  templateUrl: './past-bookings.component.html',
  styleUrls: ['./past-bookings.component.css']
})
export class PastBookingsComponent implements OnInit {
   
  pastBookings: any;

  constructor(private myService: FetchBookingsService) { }

  ngOnInit() {
    this.myService.fetchBook({"past": true}).subscribe(response => {
      this.pastBookings = response;  //fetchBook() method has been invoked to push response of GET hit to Bookings data

    });
  }

}
