import * as fromRouter from '@ngrx/router-store';
import { CoreActions } from '../actions/core.actions';
import { Params } from '@angular/router';
import { ActionReducerMap } from '@ngrx/store';

export const coreFeatureKey = 'core';

export interface State {
  router: fromRouter.RouterReducerState<RouterStateUrl>;
}

export interface RouterStateUrl {
  url: string;
  params: Params;
  queryParams: Params;
}

export const reducers: ActionReducerMap<State> = {
  router: fromRouter.routerReducer
};

export function reducer(state, action: CoreActions): State {
  // @ts-ignore
  switch (action.type) {

    default:
      return state;
  }
}
