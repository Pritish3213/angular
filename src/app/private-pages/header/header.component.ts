import { BookingCountService } from './booking-count.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ParChildCommunicationService } from '../services/par-child-communication.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  heading: string = 'My Profile';
  fullname: string;
  posts: any;
  count: any;

  constructor(private service: BookingCountService, private router: Router, private activatedRoute: ActivatedRoute, private commService: ParChildCommunicationService) { }

  ngOnInit() {
    //To get the no of counts of the Bookings
    this.service.getBookCount().subscribe(response =>{
      this.posts = response;
      this.count = this.posts.length;
    })
    this.fullname = this.commService.getName();
    this.fullname = localStorage.getItem('token-name'); //to fetch details so that we can put the name on the navbar
    this.router.navigate(['profile'], {relativeTo: this.activatedRoute});
  }

 //To logout the user 
  logout(){
    localStorage.clear();
    this.router.navigate(['public/login']);
  }


}
