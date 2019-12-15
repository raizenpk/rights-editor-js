import { Action, createReducer, on } from '@ngrx/store';
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Role } from '../../models/role';
import * as RoleActions from '../actions/role.actions';

export const roleFeatureKey = 'role';

export interface State extends EntityState<Role> {
}

export const adapter: EntityAdapter<Role> =
  createEntityAdapter<Role>({
    selectId: role => role.id
  });

export const initialState: State =
  adapter.getInitialState();

const roleReducer = createReducer(
  initialState,
  on(RoleActions.loadRoles, (state) => {
    return state;
  }),
  on(RoleActions.loadRolesSuccess, (state, {roles}) => {
    return adapter.addAll(roles, state);
  }),
  on(RoleActions.loadRolesFailure, (state, {error}) => {
    return state;
  })
);

export function reducer(state: State | undefined, action: Action) {
  return roleReducer(state, action);
}
