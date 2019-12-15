import { Action, createReducer } from '@ngrx/store';

export const roleFeatureKey = 'role';

export interface State {
}

export const initialState: State = {};

const roleReducer = createReducer(
  initialState
);

export function reducer(state: State | undefined, action: Action) {
  return roleReducer(state, action);
}

