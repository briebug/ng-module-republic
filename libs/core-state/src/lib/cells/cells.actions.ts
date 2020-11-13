import { createAction, props } from '@ngrx/store';
import { Cell } from '@bba/api-interfaces';

export const resetSelectedCell = createAction('[Cells] Reset Selected Cell');
export const resetCells = createAction('[Cells] Reset Cells');

// Select Cell
export const selectCell = createAction(
  '[Cells] Select Cell',
  props<{ selectedId: string }>()
);

// Load Cells
export const loadCells = createAction('[Cells] Load Cells');

export const loadCellsSuccess = createAction(
  '[Cells] Load Cells Success',
  props<{ cells: Cell[] }>()
);

export const loadCellsFailure = createAction(
  '[Cells] Load Cells Failure',
  props<{ error: any }>()
);

// Load Cell
export const loadCell = createAction(
  '[Cells] Load Cell',
  props<{ cellId: string }>()
);

export const loadCellSuccess = createAction(
  '[Cells] Load Cell Success',
  props<{ cell: Cell }>()
);

export const loadCellFailure = createAction(
  '[Cells] Load Cell Failure',
  props<{ error: any }>()
);

// Create Cell
export const createCell = createAction(
  '[Cells] Create Cell',
  props<{ cell: Cell }>()
);

export const createCellSuccess = createAction(
  '[Cells] Create Cell Success',
  props<{ cell: Cell }>()
);

export const createCellFailure = createAction(
  '[Cells] Create Cell Failure',
  props<{ error: any }>()
);

// Update Cell
export const updateCell = createAction(
  '[Cells] Update Cell',
  props<{ cell: Cell }>()
);

export const updateCellSuccess = createAction(
  '[Cells] Update Cell Success',
  props<{ cell: Cell }>()
);

export const updateCellFailure = createAction(
  '[Cells] Update Cell Failure',
  props<{ error: any }>()
);

// Delete Cell
export const deleteCell = createAction(
  '[Cells] Delete Cell',
  props<{ cell: Cell }>()
);

export const deleteCellCancelled = createAction('[Cells] Delete Cell Cancelled');

export const deleteCellSuccess = createAction(
  '[Cells] Delete Cell Success',
  props<{ cell: Cell }>()
);

export const deleteCellFailure = createAction(
  '[Cells] Delete Cell Failure',
  props<{ error: any }>()
);