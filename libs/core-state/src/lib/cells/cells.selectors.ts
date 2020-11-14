import { Cell } from '@bba/api-interfaces';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { cellsAdapter, CellsState, CELLS_FEATURE_KEY } from './cells.reducer';

// Lookup the 'Cells' feature state managed by NgRx
export const getCellsState = createFeatureSelector<
  CellsState
>(CELLS_FEATURE_KEY);

const { selectAll, selectEntities } = cellsAdapter.getSelectors();

export const getCellsLoaded = createSelector(
  getCellsState,
  (state: CellsState) => state.loaded
);

export const getCellsError = createSelector(
  getCellsState,
  (state: CellsState) => state.error
);

export const getAllCells = createSelector(
  getCellsState,
  (state: CellsState) => selectAll(state)
);

export const getCellsEntities = createSelector(
  getCellsState,
  (state: CellsState) => selectEntities(state)
);

export const getSelectedCellId = createSelector(
  getCellsState,
  (state: CellsState) => state.selectedId
);

const emptyCell: Cell = {
  id: null,
  title: '',
  description: '',
  componentName: '',
  remoteName: '',
  visible: false,
  uri: '',
  module: '',
  published: false,
  healthy: false
};

export const getSelectedCell = createSelector(
  getCellsEntities,
  getSelectedCellId,
  (entities, selectedId) => {
    return selectedId ? entities[selectedId] : emptyCell;
  }
);