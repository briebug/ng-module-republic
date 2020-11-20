import { TestBed } from '@angular/core/testing';

import { CellsService } from './cells.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Socket } from 'ngx-socket-io';

describe('CellsService', () => {
  let service: CellsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(CellsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
