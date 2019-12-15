import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromUser from '../reducers/user.reducer';
import { of } from 'rxjs';

export const selectUserState = createFeatureSelector<fromUser.State>(
  fromUser.userFeatureKey
);

export const {
  selectAll,
  selectEntities,
  selectIds,
  selectTotal
} = fromUser.adapter.getSelectors(selectUserState);

export const getUserById = createSelector(
  selectEntities,
  (usersDictionary, props: { userId: string }) => {
    return usersDictionary.hasOwnProperty(props.userId) ? usersDictionary[props.userId] : of(null);
  }
);
