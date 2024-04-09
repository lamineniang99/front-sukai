import { TestBed } from '@angular/core/testing';

import { SdmService } from './sdm.service';

describe('SdmService', () => {
  let service: SdmService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SdmService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
