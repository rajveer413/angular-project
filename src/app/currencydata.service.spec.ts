import { TestBed, inject } from '@angular/core/testing';

import { CurrencydataService } from './currencydata.service';

describe('CurrencydataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CurrencydataService]
    });
  });

  it('should be created', inject([CurrencydataService], (service: CurrencydataService) => {
    expect(service).toBeTruthy();
  }));
});
