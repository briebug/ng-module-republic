import { TestBed } from '@angular/core/testing';

import { CellsBroadcastService } from './cells-broadcast.service';

describe('CellsBroadcastService', () => {
  let service: CellsBroadcastService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CellsBroadcastService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
