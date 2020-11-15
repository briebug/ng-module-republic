import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Cell } from '@bba/api-interfaces';
import { CellsFacade } from '@bba/core-state';

@Component({
  selector: 'bba-cells',
  templateUrl: './cells.component.html',
  styleUrls: ['./cells.component.scss']
})
export class CellsComponent implements OnInit {
  allCells$: Observable<Cell[]> = this.cellsFacade.allCells$;
  selectedCell$: Observable<Cell> = this.cellsFacade.selectedCell$;

  constructor(
    private cellsFacade: CellsFacade,
    ) {}

  ngOnInit(): void {
    this.reset();
    this.cellsFacade.mutations$.subscribe((_) => this.reset())
  }

  reset() {
    this.loadCells();
    this.selectCell(null);
  }

  resetForm() {
    this.selectCell(null);
  }

  selectCell(cell: Cell) {
    this.cellsFacade.selectCell(cell?.id);
  }

  loadCells() {
    this.cellsFacade.loadCells();
  }

  saveCell(cell: Cell) {
    this.cellsFacade.saveCell(cell);
  }

  deleteCell(cell: Cell) {
    this.cellsFacade.deleteCell(cell);
  }
}