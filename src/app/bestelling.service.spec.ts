import { TestBed, inject } from '@angular/core/testing';

import { BestellingService } from './bestelling.service';

describe('BestellingService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BestellingService]
    });
  });

  it('should be created', inject([BestellingService], (service: BestellingService) => {
    expect(service).toBeTruthy();
  }));
});
