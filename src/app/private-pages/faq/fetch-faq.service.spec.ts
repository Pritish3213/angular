import { TestBed } from '@angular/core/testing';

import { FetchFAQService } from './fetch-faq.service';

describe('FetchFAQService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FetchFAQService = TestBed.get(FetchFAQService);
    expect(service).toBeTruthy();
  });
});
