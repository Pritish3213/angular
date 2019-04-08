import { BookingCountService } from './header/booking-count.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { PrivatePagesRoutingModule } from './private-pages-routing.module';
import { HeaderComponent } from './header/header.component';
import { ProfileComponent } from './profile/profile.component';
import { MyBookingsComponent } from './my-bookings/my-bookings.component';
import { FaqComponent } from './faq/faq.component';
import { UpcomingBookingsComponent } from './my-bookings/upcoming-bookings/upcoming-bookings.component';
import { PastBookingsComponent } from './my-bookings/past-bookings/past-bookings.component';
import { UpdateUserService } from './profile/update-user.service';
import { FetchBookingsService } from './my-bookings/fetch-bookings.service';
import { ParChildCommunicationService } from './services/par-child-communication.service';
import { FetchFAQService } from './faq/fetch-faq.service';

@NgModule({
  declarations: [HeaderComponent, ProfileComponent, MyBookingsComponent, FaqComponent, UpcomingBookingsComponent, PastBookingsComponent],
  imports: [
    CommonModule,
    PrivatePagesRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [BookingCountService,UpdateUserService, FetchBookingsService, ParChildCommunicationService, FetchFAQService]
})
export class PrivatePagesModule { }
