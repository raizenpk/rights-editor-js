import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromResource from '../reducers/resource.reducer';
import { of } from 'rxjs';

export const selectResourceState = createFeatureSelector<fromResource.State>(
  fromResource.resourceFeatureKey
);

export const {
  selectAll,
  selectEntities,
  selectIds,
  selectTotal
} = fromResource.adapter.getSelectors(selectResourceState);

export const selectById = createSelector(
  selectEntities,
  (resources, props: { resourceId: string }) => {
    if (resources.hasOwnProperty(props.resourceId)) {
      return resources[props.resourceId];
    }

    return of(null);
  }
);
