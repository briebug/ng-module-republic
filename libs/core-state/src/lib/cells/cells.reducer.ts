import { Cell } from '@bba/api-interfaces';
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Action, createReducer, on } from '@ngrx/store';

import * as CellsActions from './cells.actions';

export const CELLS_FEATURE_KEY = 'cells';

export interface CellsState extends EntityState<Cell> {
  selectedId?: string | number; // which cells record has been selected
  loaded: boolean; // has the cells list been loaded
  error?: string | null; // last known error (if any)
}

export interface CellsPartialState {
  readonly [CELLS_FEATURE_KEY]: CellsState;
}

export const cellsAdapter: EntityAdapter<Cell> = createEntityAdapter();

export const initialCellsState: CellsState = cellsAdapter.getInitialState(
  {
    // set initial required properties
    loaded: false,
  }
);

const onFailure = (state, { error }) => ({ ...state, error });

const _cellsReducer = createReducer(
  initialCellsState,
  on(CellsActions.selectCell, (state, { selectedId }) =>
    Object.assign({}, state, { selectedId })
  ),
  on(CellsActions.resetSelectedCell, (state) =>
    Object.assign({}, state, { selectedId: null })
  ),
  on(CellsActions.resetCells, (state) => cellsAdapter.removeAll(state)),
  // Load cells
  on(CellsActions.loadCells, (state) => ({
    ...state,
    loaded: false,
    error: null,
  })),
  on(CellsActions.loadCellsSuccess, (state, { cells }) =>
    cellsAdapter.setAll(cells, { ...state, loaded: true })
  ),
  on(CellsActions.loadCellsFailure, onFailure),
  // Load cell
  on(CellsActions.loadCell, (state) => ({
    ...state,
    loaded: false,
    error: null,
  })),
  on(CellsActions.loadCellSuccess, (state, { cell }) =>
    cellsAdapter.upsertOne(cell, { ...state, loaded: true })
  ),
  on(CellsActions.loadCellFailure, onFailure),
  // Add cell
  on(CellsActions.createCellSuccess, (state, { cell }) =>
    cellsAdapter.addOne(cell, state)
  ),
  on(CellsActions.createCellFromLedger, (state, { cell }) =>
    cellsAdapter.addOne(cell, state)
  ),
  on(CellsActions.createCellFailure, onFailure),
  // Update cell
  on(CellsActions.updateCellSuccess, (state, { cell }) =>
    cellsAdapter.updateOne({ id: cell.id, changes: cell }, state)
  ),
  on(CellsActions.updateCellFromLedger, (state, { cell }) =>
    cellsAdapter.updateOne({ id: cell.id, changes: cell }, state)
  ),
  on(CellsActions.updateCellFailure, onFailure),
  // Delete cell
  on(CellsActions.deleteCellSuccess, (state, { cell }) =>
    cellsAdapter.removeOne(cell.id, state)
  ),
  on(CellsActions.deleteCellFromLedger, (state, { cell }) =>
    cellsAdapter.removeOne(cell.id, state)
  ),
  on(CellsActions.deleteCellFailure, onFailure)
);

export function cellsReducer(
  state: CellsState | undefined,
  action: Action
) {
  return _cellsReducer(state, action);
}