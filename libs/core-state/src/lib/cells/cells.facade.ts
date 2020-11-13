import { Injectable } from '@angular/core';
import { Cell } from '@bba/api-interfaces';
import { Action, ActionsSubject, select, Store } from '@ngrx/store';
import { filter } from 'rxjs/operators';
import * as CellsActions from './cells.actions';
import * as CellsSelectors from './cells.selectors';

@Injectable()
export class CellsFacade {
  loaded$ = this.store.pipe(select(CellsSelectors.getCellsLoaded));
  allCells$ = this.store.pipe(select(CellsSelectors.getAllCells));
  selectedCell$ = this.store.pipe(select(CellsSelectors.getSelectedCell));

  mutations$ = this.actions$.pipe(
    filter((action: Action) =>
      action.type === CellsActions.createCell({} as any).type ||
      action.type === CellsActions.updateCell({} as any).type ||
      action.type === CellsActions.deleteCell({} as any).type
    )
  );

  constructor(private store: Store, private actions$: ActionsSubject) { }

  selectCell(selectedId: string) {
    this.dispatch(CellsActions.selectCell({ selectedId }));
  }

  loadCells() {
    this.dispatch(CellsActions.loadCells());
  }

  loadCell(cellId: string) {
    this.dispatch(CellsActions.loadCell({ cellId }));
  }

  saveCell(cell: Cell) {
    if(cell.id) {
      this.updateCell(cell);
    } else {
      this.createCell(cell);
    }
  }

  createCell(cell: Cell) {
    this.dispatch(CellsActions.createCell({ cell }));
  }

  updateCell(cell: Cell) {
    this.dispatch(CellsActions.updateCell({ cell }));
  }

  deleteCell(cell: Cell) {
    this.dispatch(CellsActions.deleteCell({ cell }));
  }

  dispatch(action: Action) {
    this.store.dispatch(action);
  }
}