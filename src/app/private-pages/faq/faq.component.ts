
import { Component, OnInit } from '@angular/core';
import { FetchFAQService } from './fetch-faq.service';


@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent implements OnInit {

  
  faqData: Object; //An Object whcih will receive array of question and answers


  constructor(private myService:FetchFAQService) { }

  ngOnInit() {
  
    this.myService.fetchFAQ().subscribe(response => {
    this.faqData = response;})  //getting response from the method fetchFAQ() 
  }
}
    



