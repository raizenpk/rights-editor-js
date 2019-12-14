import { RoleActions, RoleActionTypes } from '../actions/role.actions';

export const roleFeatureKey = 'role';

export interface State {

}

export const initialState: State = {};

export function reducer(state = initialState, action: RoleActions): State {
  switch (action.type) {

    case RoleActionTypes.LoadRoles:
      return state;

    default:
      return state;
  }
}
