import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { catchError, concatMap, map } from 'rxjs/operators';
import { of } from 'rxjs';
import * as UserActions from '../actions/user.actions';
import { UserAPI } from '../../api/user.api';

@Injectable()
export class UserEffects {

  @Effect()
  loadUsers$ = this._actions$.pipe(
    ofType(UserActions.loadUsers),
    concatMap(() => this._userAPI.getAll()
      .pipe(
        map(users => UserActions.loadUsersSuccess({users})),
        catchError((error) => of(UserActions.loadUsersFailure({error})))
      )
    )
  );

  @Effect()
  patchUser$ = this._actions$.pipe(
    ofType(UserActions.patchUser),
    concatMap((action) => this._userAPI.patchUser(action.userId, action.userPartial)
      .pipe(
        map(user => UserActions.patchUserSuccess({user})),
        catchError((error) => of(UserActions.patchUserFailure({error})))
      )
    )
  );

  constructor(private _actions$: Actions, private _userAPI: UserAPI) {
  }

}
