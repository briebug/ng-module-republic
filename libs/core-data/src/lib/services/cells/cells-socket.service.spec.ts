import { TestBed } from '@angular/core/testing';

import { CellsSocketService } from './cells-socket.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Socket } from 'ngx-socket-io';

describe('CellsSocketService', () => {
  let service: CellsSocketService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        { provide: Socket, useValue: { fromEvent: jest.fn() } },
      ]
    });
    service = TestBed.inject(CellsSocketService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
