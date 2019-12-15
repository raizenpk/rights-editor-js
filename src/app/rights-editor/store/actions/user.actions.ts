import { createAction, props } from '@ngrx/store';
import { User } from '../../models/user';

const PREFIX = '[Users] ';

export const loadUsers = createAction(
  PREFIX + 'loadUsers'
);

export const loadUsersSuccess = createAction(
  PREFIX + 'loadUsersSuccess',
  props<{ users: User[] }>()
);

export const loadUsersFailure = createAction(
  PREFIX + 'loadUsersFailure',
  props<{ error: any }>()
);
