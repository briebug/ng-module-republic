import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cell } from '@bba/api-interfaces';
import { CellsFacade } from '@bba/core-state';
import { timer } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HealthCheckService {

  constructor(
    private httpClient: HttpClient,
    private cellsFacade: CellsFacade
  ) { }

  setUpHealthChecks(cells: Cell[]) {
    // timer(0, 3000).subscribe(() => {
    //   cells.map((cell: Cell) => {
    //     this.performHealthCheck(cell.uri).subscribe(res => res.status === 200 ? null : this.cellsFacade.updateCell({ ...cell, healthy: false }));
    //   })
    // })
  }

  performHealthCheck(cellUri: string) {
    return this.httpClient.get(cellUri, { observe: 'response', responseType: 'text' })
  }
}
