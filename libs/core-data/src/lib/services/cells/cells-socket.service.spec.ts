import { TestBed } from '@angular/core/testing';

import { CellsSocketService } from './cells-socket.service';

describe('CellsSocketService', () => {
  let service: CellsSocketService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CellsSocketService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
