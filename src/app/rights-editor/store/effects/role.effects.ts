import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { RoleAPI } from '../../api/role.api';
import * as RoleActions from '../actions/role.actions';
import { catchError, concatMap, map } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class RoleEffects {

  @Effect()
  loadRoles$ = this._actions$.pipe(
    ofType(RoleActions.loadRoles),
    concatMap(() => this._roleAPI.getAll()
      .pipe(
        map(roles => RoleActions.loadRolesSuccess({roles})),
        catchError((error) => of(RoleActions.loadRolesFailure({error})))
      )
    )
  );

  constructor(private _actions$: Actions, private _roleAPI: RoleAPI) {
  }

}
