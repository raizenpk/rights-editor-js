import { createFeatureSelector } from '@ngrx/store';
import * as fromResource from '../reducers/resource.reducer';

export const selectResourceState = createFeatureSelector<fromResource.State>(
  fromResource.resourceFeatureKey
);
