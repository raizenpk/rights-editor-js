import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import * as UserActions from '../store/actions/user.actions';
import * as UserSelectors from '../store/selectors/user.selectors';
import * as fromUser from '../store/reducers/user.reducer';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private _store: Store<fromUser.State>) {
    this.loadUsers();
  }

  loadUsers() {
    this._store.dispatch(UserActions.loadUsers());
  }

  getUsers(): Observable<User[]> {
    return this._store.select(UserSelectors.selectAll);
  }

  getUserById(userId: string): Observable<User> {
    return this._store.select(UserSelectors.getUserById, {userId});
  }

  patchUser(userId: string, userPartial: object) {
    this._store.dispatch(UserActions.patchUser({userId, userPartial}));
  }

}
