import { TestBed, inject } from '@angular/core/testing';

import { RoutrguardService } from './routrguard.service';

describe('RoutrguardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RoutrguardService]
    });
  });

  it('should be created', inject([RoutrguardService], (service: RoutrguardService) => {
    expect(service).toBeTruthy();
  }));
});
