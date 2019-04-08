import { TestBed } from '@angular/core/testing';

import { BookingCountService } from './booking-count.service';

describe('BookingCountService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BookingCountService = TestBed.get(BookingCountService);
    expect(service).toBeTruthy();
  });
});
