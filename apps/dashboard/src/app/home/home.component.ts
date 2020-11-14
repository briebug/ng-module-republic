import { Component, OnInit } from '@angular/core';
import { Cell } from '@bba/api-interfaces';
import { LedgerService } from '@bba/core-data';
import { CellsFacade } from '@bba/core-state';
import { Observable } from 'rxjs';

@Component({
  selector: 'bba-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  allCells$: Observable<Cell[]> = this.cellsFacade.allCells$;

  constructor(
    private cellsFacade: CellsFacade,
    private ledgerService: LedgerService
  ) {}

  ngOnInit(): void {
    this.cellsFacade.loadCells();
    this.ledgerService.setUpSocket();
  }

}
