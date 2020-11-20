import { Injectable } from '@angular/core';
import { Cell } from '@bba/api-interfaces';
import { Socket } from 'ngx-socket-io';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CellsBroadcastService {

  constructor(private socket: Socket) { }

  updateCellBroadcast(cell: Cell): Observable<Cell> {
    this.socket.emit('update', cell);
    return of(cell);
  }

  createCellBroadcast(cell: Cell): Observable<Cell> {
    this.socket.emit('create', cell);
    return of(cell);
  }

  deleteCellBroadcast(cell: Cell): Observable<Cell> {
    this.socket.emit('delete', cell);
    return of(cell);
  }
}
