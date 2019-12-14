import { createFeatureSelector } from '@ngrx/store';
import * as fromCore from '../reducers/core.reducer';

export const selectCoreState = createFeatureSelector<fromCore.State>(
  fromCore.coreFeatureKey
);
