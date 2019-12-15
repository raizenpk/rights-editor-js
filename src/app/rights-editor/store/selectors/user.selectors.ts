import { createFeatureSelector } from '@ngrx/store';
import * as fromUser from '../reducers/user.reducer';

export const selectUserState = createFeatureSelector<fromUser.State>(
  fromUser.userFeatureKey
);

export const {
  selectAll,
  selectEntities,
  selectIds,
  selectTotal
} = fromUser.adapter.getSelectors(selectUserState);
