import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { catchError, concatMap, map } from 'rxjs/operators';
import { of } from 'rxjs';
import * as UserActions from '../actions/user.actions';
import { UserAPI } from '../../api/user.api';

@Injectable()
export class UserEffects {

  @Effect()
  loadUsers$ = this.actions$.pipe(
    ofType(UserActions.loadUsers.type),
    concatMap(() => this.userAPI.getAll()
      .pipe(
        map(users => UserActions.loadUsersSuccess({users})),
        catchError((error) => of(UserActions.loadUsersFailure({error})))
      )
    )
  );

  constructor(private actions$: Actions, private userAPI: UserAPI) {
  }

}
