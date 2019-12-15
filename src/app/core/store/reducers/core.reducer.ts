import * as fromRouter from '@ngrx/router-store';
import { ActivatedRouteSnapshot, Data, Params, RouterStateSnapshot } from '@angular/router';
import { Action, ActionReducerMap } from '@ngrx/store';

export const coreFeatureKey = 'core';

export interface State {
  router: fromRouter.RouterReducerState<RouterStateUrl>;
}

export interface RouterStateUrl {
  url: string;
  params: Params;
  queryParams: Params;
  data?: Data;
}

export const initialState: State = {
  router: {
    state: {
      url: window.location.pathname,
      params: {},
      queryParams: {}
    },
    navigationId: 0
  }
};

export const reducers: ActionReducerMap<State, Action> = {
  router: fromRouter.routerReducer
};

export class CustomSerializer
  implements fromRouter.RouterStateSerializer<RouterStateUrl> {
  serialize(routerState: RouterStateSnapshot): RouterStateUrl {
    const {url} = routerState;
    const {queryParams} = routerState.root;
    let state: ActivatedRouteSnapshot = routerState.root;

    while (state.firstChild) {
      state = state.firstChild;
    }

    const {params, data} = state;

    return {url, queryParams, params, data};
  }
}
