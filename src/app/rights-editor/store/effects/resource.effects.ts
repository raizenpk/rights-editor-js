import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { ResourceAPI } from '../../api/resource.api';
import * as ResourceActions from '../actions/resource.actions';
import { catchError, concatMap, map } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class ResourceEffects {

  @Effect()
  loadResources$ = this._actions$.pipe(
    ofType(ResourceActions.loadResources),
    concatMap(() => this._resourceAPI.getAll()
      .pipe(
        map(resources => ResourceActions.loadResourcesSuccess({resources})),
        catchError((error) => of(ResourceActions.loadResourcesFailure({error})))
      )
    )
  );

  constructor(private _actions$: Actions, private _resourceAPI: ResourceAPI) {
  }

}
