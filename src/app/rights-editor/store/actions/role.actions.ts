import { createAction, props } from '@ngrx/store';
import { Role } from '../../models/role';

const PREFIX = '[Role] ';

export const loadRoles = createAction(
  PREFIX + 'loadRoles'
);

export const loadRolesSuccess = createAction(
  PREFIX + 'loadRolesSuccess',
  props<{ roles: Role[] }>()
);

export const loadRolesFailure = createAction(
  PREFIX + 'loadRolesFailure',
  props<{ error: any }>()
);
