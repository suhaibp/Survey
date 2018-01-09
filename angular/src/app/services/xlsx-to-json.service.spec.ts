import { TestBed, inject } from '@angular/core/testing';

import { XlsxToJsonService } from './xlsx-to-json.service';

describe('XlsxToJsonService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [XlsxToJsonService]
    });
  });

  it('should be created', inject([XlsxToJsonService], (service: XlsxToJsonService) => {
    expect(service).toBeTruthy();
  }));
});
