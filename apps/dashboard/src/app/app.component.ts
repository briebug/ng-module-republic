import { Component } from '@angular/core';
import { Cell } from '@bba/api-interfaces';
import { CellsFacade } from '@bba/core-state';
import { Observable } from 'rxjs';

@Component({
  selector: 'bba-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  allCells$: Observable<Cell[]> = this.cellsFacade.allCells$;
  links = [
    { path: '/', icon: 'home', title: 'home' },
  ];

  constructor(
    private cellsFacade: CellsFacade
  ) {}

  logout() { }

  toggleSidenav() { }

  updateCellVisibility(cell: Cell) {
    this.cellsFacade.updateCell({ ...cell, visible: !cell.visible });
  }
}