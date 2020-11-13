import { TestBed } from '@angular/core/testing';

import { LedgerService } from './ledger.service';

describe('LedgerService', () => {
  let service: LedgerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LedgerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
