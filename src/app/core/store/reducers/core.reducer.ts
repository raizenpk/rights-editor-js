import * as fromRouter from '@ngrx/router-store';
import { ActivatedRouteSnapshot, Params, RouterStateSnapshot } from '@angular/router';
import { ActionReducerMap } from '@ngrx/store';

export const coreFeatureKey = 'core';

export interface State {
  router: fromRouter.RouterReducerState<RouterStateSnapshot>;
}

export interface RouterStateUrl {
  url: string;
  params: Params;
  queryParams: Params;
}

export const reducers: ActionReducerMap<State> = {
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

    const {params} = state;

    return {url, queryParams, params};
  }
}
