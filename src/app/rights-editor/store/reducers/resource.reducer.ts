import { ResourceActions, ResourceActionTypes } from '../actions/resource.actions';

export const resourceFeatureKey = 'resource';

export interface State {

}

export const initialState: State = {};

export function reducer(state = initialState, action: ResourceActions): State {
  switch (action.type) {

    case ResourceActionTypes.LoadResources:
      return state;

    default:
      return state;
  }
}
