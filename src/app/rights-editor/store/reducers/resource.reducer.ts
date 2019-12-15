import { Action, createReducer, on } from '@ngrx/store';
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Resource } from '../../models/resource';
import * as ResourceActions from '../actions/resource.actions';

export const resourceFeatureKey = 'resource';

export interface State extends EntityState<Resource> {
}

export const adapter: EntityAdapter<Resource> =
  createEntityAdapter<Resource>({
    selectId: resource => resource.id
  });

export const initialState: State =
  adapter.getInitialState();


const resourceReducer = createReducer(
  initialState,
  on(ResourceActions.loadResources, (state) => {
    return state;
  }),
  on(ResourceActions.loadResourcesSuccess, (state, {resources}) => {
    return adapter.addAll(resources, state);
  }),
  on(ResourceActions.loadResourcesFailure, (state, {error}) => {
    return state;
  })
);

export function reducer(state: State | undefined, action: Action) {
  return resourceReducer(state, action);
}
