import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { combineLatest, merge} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CellsSocketService {

  constructor(private socket: Socket) { }

  updateCellMutation$ = this.socket.fromEvent('update');
  createCellMutation$ = this.socket.fromEvent('create')
  deleteCellMutation$ = this.socket.fromEvent('delete');

  cellMutations$ = merge(
    this.updateCellMutation$,
    this.createCellMutation$,
    this.deleteCellMutation$
  );
}
