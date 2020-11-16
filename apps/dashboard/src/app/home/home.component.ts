import { Component, OnInit } from '@angular/core';
import { Cell } from '@bba/api-interfaces';
import { CellsSocketService } from '@bba/core-data';
import { CellsFacade } from '@bba/core-state';
import { Observable } from 'rxjs';

@Component({
  selector: 'bba-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  allPublishedCells$: Observable<Cell[]> = this.cellsFacade.allPublishedCells$;

  constructor(
    private cellsFacade: CellsFacade,
    private cellsSocketService: CellsSocketService
  ) {}

  ngOnInit(): void {
    this.cellsFacade.loadCells();
    this.cellsFacade.initHealthChecks();
    this.cellsSocketService.updateCellMutation$.subscribe(() => this.cellsFacade.loadCells());
    this.cellsSocketService.deleteCellMutation$.subscribe(() => this.cellsFacade.loadCells());
    this.cellsSocketService.createCellMutation$.subscribe(() => this.cellsFacade.loadCells());    
  }

}
