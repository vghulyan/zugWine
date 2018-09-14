import { TestBed, inject } from '@angular/core/testing';

import { ZugServiceService } from './zug-service.service';

describe('ZugServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ZugServiceService]
    });
  });

  it('should be created', inject([ZugServiceService], (service: ZugServiceService) => {
    expect(service).toBeTruthy();
  }));
});
