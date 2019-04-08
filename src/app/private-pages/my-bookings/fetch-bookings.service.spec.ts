import { TestBed } from '@angular/core/testing';

import { FetchBookingsService } from './fetch-bookings.service';

describe('FetchBookingsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FetchBookingsService = TestBed.get(FetchBookingsService);
    expect(service).toBeTruthy();
  });
});
