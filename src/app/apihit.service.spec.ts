import { TestBed, inject } from '@angular/core/testing';

import { ApihitService } from './apihit.service';

describe('ApihitService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ApihitService]
    });
  });

  it('should be created', inject([ApihitService], (service: ApihitService) => {
    expect(service).toBeTruthy();
  }));
});
