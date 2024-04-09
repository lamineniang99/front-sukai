import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { noReturnAuthGuard } from './no-return-auth.guard';

describe('noReturnAuthGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => noReturnAuthGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
