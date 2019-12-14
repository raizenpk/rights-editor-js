import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';

import { concatMap } from 'rxjs/operators';
import { EMPTY } from 'rxjs';
import { RoleActions, RoleActionTypes } from '../actions/role.actions';


@Injectable()
export class RoleEffects {


  @Effect()
  loadRoles$ = this.actions$.pipe(
    ofType(RoleActionTypes.LoadRoles),
    /** An EMPTY observable only emits completion. Replace with your own observable API request */
    concatMap(() => EMPTY)
  );


  constructor(private actions$: Actions<RoleActions>) {
  }

}
