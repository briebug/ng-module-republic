import { Injectable } from '@angular/core';
import { Cell } from '@bba/api-interfaces';
import { Observable, of } from 'rxjs';
import * as io from 'socket.io-client';

@Injectable({
  providedIn: 'root'
})
export class CellsBroadcastService {
  server = io('http://localhost:80');

  constructor() { }

  updateCellBroadcast(cell: Cell): Observable<Cell> {
    this.server.emit('update', cell);
    return of(cell);
  }

  createCellBroadcast(cell: Cell): Observable<Cell> {
    this.server.emit('create', cell);
    return of(cell);
  }

  deleteCellBroadcast(cell: Cell): Observable<Cell> {
    this.server.emit('delete', cell);
    return of(cell);
  }
}
