import { TestBed } from '@angular/core/testing';

import { ServicePartsService } from './service-parts.service';

describe('ServicePartsService', () => {
  let service: ServicePartsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicePartsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
