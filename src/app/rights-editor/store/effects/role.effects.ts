import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { RoleAPI } from '../../api/role.api';
import * as RoleActions from '../actions/role.actions';
import { catchError, concatMap, map } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class RoleEffects {

  @Effect()
  loadRoles$ = this.actions$.pipe(
    ofType(RoleActions.loadRoles.type),
    concatMap(() => this.roleAPI.getAll()
      .pipe(
        map(roles => RoleActions.loadRolesSuccess({roles})),
        catchError((error) => of(RoleActions.loadRolesFailure({error})))
      )
    )
  );

  constructor(private actions$: Actions, private roleAPI: RoleAPI) {
  }

}
