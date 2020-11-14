import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import { CellsFacade } from '@bba/core-state';
import { Cell } from '@bba/api-interfaces';

@Injectable({
  providedIn: 'root'
})
export class LedgerService {
  socket;
  constructor(private cellsFacade: CellsFacade) {}

  setUpSocket() {
    this.socket = io('http://localhost:80');
    this.socket.on('connect', () => {
      this.socket.on('create', (cell: Cell) => {
        console.log(cell);
        if (cell) return this.cellsFacade.createCellFromLedger(cell);
      })
      this.socket.on('delete', (cell: Cell) => {
        console.log(cell);
        if (cell) return this.cellsFacade.deleteCellFromLedger(cell);
      })
      this.socket.on('update', (cell: Cell) => {
        console.log(cell);
        if (cell) return this.cellsFacade.updateCellFromLedger(cell);
      })
    })
  }
  
}