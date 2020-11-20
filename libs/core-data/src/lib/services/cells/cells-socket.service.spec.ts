import { TestBed } from '@angular/core/testing';

import { CellsSocketService } from './cells-socket.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Socket } from 'ngx-socket-io';

const mockSocket = {
  fromEvent: jest.fn()
};

describe('CellsSocketService', () => {
  let service: CellsSocketService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        { provide: Socket, useValue: mockSocket },
      ]
    });
    service = TestBed.inject(CellsSocketService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
