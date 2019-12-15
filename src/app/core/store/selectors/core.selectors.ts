import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromCore from '../reducers/core.reducer';

export const selectCoreState = createFeatureSelector<fromCore.State>(
  fromCore.coreFeatureKey
);

export const selectRouter = createSelector(selectCoreState, state => {
  return state.router;
});
