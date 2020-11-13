import { TestBed } from '@angular/core/testing';

import { CellsService } from './cells.service';

describe('CellsService', () => {
  let service: CellsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CellsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
