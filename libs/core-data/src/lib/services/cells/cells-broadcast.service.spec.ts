import { TestBed } from '@angular/core/testing';

import { CellsBroadcastService } from './cells-broadcast.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Socket } from 'ngx-socket-io';

const mockSocket = {
  emit: jest.fn()
};

describe('CellsBroadcastService', () => {
  let service: CellsBroadcastService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        { provide: Socket, useValue: mockSocket },
      ]
    });
    service = TestBed.inject(CellsBroadcastService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
