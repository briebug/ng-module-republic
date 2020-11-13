import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';

@Injectable({
  providedIn: 'root'
})
export class LedgerService {
  socket;

  setUpSocket() {
    this.socket = io('http://localhost:80');
    this.socket.on('connect', () => {
      this.socket.on('create', (data) => {
        console.log(data, "CREATE");
      })
      this.socket.on('delete', (data) => {
        console.log(data, "DELETE");
      })
      this.socket.on('update', (data) => {
        console.log(data, "UPDATE");
      })
    })
  }
  
}