import * as UserActions from '../actions/user.actions';
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { User } from '../../models/user';
import { Action, createReducer, on } from '@ngrx/store';

export const userFeatureKey = 'user';

export interface State extends EntityState<User> {
}

export const adapter: EntityAdapter<User> =
  createEntityAdapter<User>({
    selectId: user => user.id
  });

export const initialState: State =
  adapter.getInitialState();

const userReducer = createReducer(
  initialState,
  on(UserActions.loadUsers, (state) => {
    return state;
  }),
  on(UserActions.loadUsersSuccess, (state, {users}) => {
    return adapter.addAll(users, state);
  }),
  on(UserActions.loadUsersFailure, (state, {error}) => {
    return state;
  }),
  on(UserActions.patchUserSuccess, (state, {user}) => {
    return adapter.updateOne({id: user.id, changes: user}, state);
  }),
);

export function reducer(state: State | undefined, action: Action) {
  return userReducer(state, action);
}
