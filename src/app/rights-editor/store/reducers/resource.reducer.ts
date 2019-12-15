import { Action, createReducer } from '@ngrx/store';

export const resourceFeatureKey = 'resource';

export interface State {
}

export const initialState: State = {};

const resourceReducer = createReducer(
  initialState
);

export function reducer(state: State | undefined, action: Action) {
  return resourceReducer(state, action);
}
