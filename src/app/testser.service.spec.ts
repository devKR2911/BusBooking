import { TestBed, inject } from '@angular/core/testing';

import { TestserService } from './testser.service';

describe('TestserService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TestserService]
    });
  });

  it('should be created', inject([TestserService], (service: TestserService) => {
    expect(service).toBeTruthy();
  }));
});
