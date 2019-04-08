import { TestBed } from '@angular/core/testing';

import { ParChildCommunicationService } from './par-child-communication.service';

describe('ParChildCommunicationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ParChildCommunicationService = TestBed.get(ParChildCommunicationService);
    expect(service).toBeTruthy();
  });
});
