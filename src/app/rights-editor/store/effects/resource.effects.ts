import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { ResourceAPI } from '../../api/resource.api';
import * as ResourceActions from '../actions/resource.actions';
import { catchError, concatMap, map } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class ResourceEffects {

  @Effect()
  loadResources$ = this.actions$.pipe(
    ofType(ResourceActions.loadResources.type),
    concatMap(() => this.resourceAPI.getAll()
      .pipe(
        map(resources => ResourceActions.loadResourcesSuccess({resources})),
        catchError((error) => of(ResourceActions.loadResourcesFailure({error})))
      )
    )
  );

  constructor(private actions$: Actions, private resourceAPI: ResourceAPI) {
  }

}
