import { ActionReducerMap } from '@ngrx/store';
import * as fromCells from './cells/cells.reducer';
import * as fromRouter from '@ngrx/router-store';
import { Params } from '@angular/router';

export interface RouterStateUrl {
  url: string;
  queryParams: Params;
  params: Params;
}
// ---------------------------------------
// Core State and Reducers
// ---------------------------------------

export interface AppState {
  router: fromRouter.RouterReducerState<RouterStateUrl>;
  [fromCells.CELLS_FEATURE_KEY]: fromCells.CellsState;
}

export const reducers: ActionReducerMap<AppState> = {
  router: fromRouter.routerReducer,
  [fromCells.CELLS_FEATURE_KEY]: fromCells.cellsReducer,
};