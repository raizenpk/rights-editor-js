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

  constructor(private store: Store<fromUser.State>) {
    this.loadUsers();
  }

  loadUsers() {
    this.store.dispatch(UserActions.loadUsers());
  }

  getUsers(): Observable<User[]> {
    return this.store.select(UserSelectors.selectAll);
  }

}
